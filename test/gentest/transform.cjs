/**
 * @param fileInfo {import('jscodeshift').FileInfo}
 * @param api {import('jscodeshift').API}
 */
module.exports = function (fileInfo, api) {
  const j = api.jscodeshift;

  const root = j(fileInfo.source);

  const getFirst = () => root.find(j.Program).get("body", 0);

  j(getFirst()).replaceWith(
    [
      j.importDeclaration(
        [
          j.importSpecifier(j.identifier("it")),
          j.importSpecifier(j.identifier("expect")),
        ],
        j.stringLiteral("vitest")
      ),
      j.importDeclaration(
        [j.importSpecifier(j.identifier("Yoga"))],
        j.stringLiteral("./init")
      ),

      importIfUsed("getMeasureCounter", root, j),
      importIfUsed("getMeasureCounterMax", root, j),
      importIfUsed("getMeasureCounterMin", root, j),
    ].filter(Boolean)
  );

  getFirst().node.comments = [
    j.commentLine("@generated by gentest/run.js from @file"),
  ];

  root
    .find(j.MemberExpression, {
      object: { name: "console" },
      property: { name: "assert" },
    })
    .forEach((path) => {
      const assertion = j(path.parentPath);

      const left = assertion.get("arguments", 0, "left");
      const right = assertion.get("arguments", 0, "right");
      const message = assertion.get("arguments", 1);

      assertion.replaceWith(
        j.expressionStatement(
          j.callExpression(
            j.memberExpression(
              j.callExpression(j.identifier("expect"), [
                right.value,
                message.value,
              ]),
              j.identifier("toBe")
            ),
            [left.value]
          )
        )
      );
    });

  return root.toSource();
};

function importIfUsed(name, root, j) {
  const callExpression = root.find(j.CallExpression, { callee: { name } });

  if (callExpression.size() === 0) return null;
  return j.importDeclaration(
    [j.importSpecifier(j.identifier(name))],
    j.stringLiteral("./tools")
  );
}