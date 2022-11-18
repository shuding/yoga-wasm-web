import { vi, it, describe, expect } from "vitest";
import Yoga from "./initYoga";

describe("measureCallback", () => {
  it("should call measure callback when it is provided", async () => {
    const Node = Yoga.Node;
    const root = Node.create();
    root.setWidth(500);
    root.setHeight(500);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);

    const node1 = Node.create();
    node1.setWidth(100);
    node1.setHeight(100);

    const node2 = Node.create();
    node2.setMeasureFunc(() => ({ width: 100, height: 100 }));

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
      width: 500,
      height: 100,
    });
  });

  it("should have 4 args", async () => {
    const callback = vi.fn(() => ({ width: 100, height: 100 }));
    const Node = Yoga.Node;
    const root = Node.create();
    root.setWidth(500);
    root.setHeight(500);

    const node1 = Node.create();
    node1.setMeasureFunc(callback);

    root.insertChild(node1, 0);
    root.calculateLayout(500, 500);

    expect(root.getComputedLayout()).toContain({
      top: 0,
      width: 500,
      height: 500,
    });

    expect(node1.getComputedLayout()).toContain({
      top: 0,
      width: 500,
      height: 100,
    });

    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith(
      500,
      Yoga.MEASURE_MODE_EXACTLY,
      500,
      Yoga.MEASURE_MODE_AT_MOST
    );
  });
});
