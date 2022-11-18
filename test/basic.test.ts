import { it, describe, expect } from "vitest";
import Yoga from "./initYoga";

describe("Basic", () => {
  it("should calculate layout with two nodes", async () => {
    const Node = Yoga.Node;
    const root = Node.create();
    root.setWidth(500);
    root.setHeight(500);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);

    const node1 = Node.create();
    node1.setWidth(100);
    node1.setHeight(100);

    const node2 = Node.create();
    node2.setWidth(100);
    node2.setHeight(100);

    root.insertChild(node1, 0);
    root.insertChild(node2, 1);

    root.calculateLayout(500, 500);
    expect(root.getComputedLayout()).toContain({
      top: 0,
      width: 500,
      height: 500,
    });

    expect(node1.getComputedLayout()).toContain({
      top: 150,
      width: 100,
      height: 100,
    });

    expect(node2.getComputedLayout()).toContain({
      top: 250,
      width: 100,
      height: 100,
    });
  });
});
