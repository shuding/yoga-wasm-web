import { vi, it, describe, expect } from "vitest";
import { Yoga } from "./init";

describe("measureCallback", () => {
  it("should be called when it is provided", async () => {
    const callback = vi.fn(() => ({ width: 100, height: 100 }));

    const root = Yoga.Node.create();
    const node = Yoga.Node.create();
    root.insertChild(node, root.getChildCount());

    node.setMeasureFunc(callback);

    root.calculateLayout();

    expect(callback).toHaveBeenCalled();
    expect(root.getComputedLayout()).toContain({
      width: 100,
      height: 100,
    });
  });

  it("should have 4 args", async () => {
    const callback = vi.fn(() => ({ width: 100, height: 100 }));

    const root = Yoga.Node.create();
    const node = Yoga.Node.create();
    root.insertChild(node, root.getChildCount());

    node.setMeasureFunc(callback);

    root.calculateLayout(100, 100);

    expect(root.getComputedLayout()).toContain({
      width: 100,
      height: 100,
    });

    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith(
      100,
      Yoga.MEASURE_MODE_EXACTLY,
      100,
      Yoga.MEASURE_MODE_AT_MOST
    );
  });

  it("should work when empty object is returned", async () => {
    const callback = vi.fn(() => ({}));

    const root = Yoga.Node.create();
    const node = Yoga.Node.create();
    root.insertChild(node, root.getChildCount());

    // @ts-expect-error
    node.setMeasureFunc(callback);

    root.calculateLayout(10, 10);
    expect(callback).toHaveBeenCalled();
    expect(root.getComputedLayout()).toContain({
      width: 10,
      height: 10,
    });
  });

  it("should work when only width is provided", async () => {
    const callback = vi.fn(() => ({ width: 10 }));

    const root = Yoga.Node.create();
    const node = Yoga.Node.create();
    root.insertChild(node, root.getChildCount());

    // @ts-expect-error
    node.setMeasureFunc(callback);

    root.calculateLayout(10, 10);
    expect(callback).toHaveBeenCalled();
    expect(root.getComputedLayout()).toContain({
      width: 10,
      height: 10,
    });
  });

  it("should work when only height is provided", async () => {
    const callback = vi.fn(() => ({ height: 10 }));

    const root = Yoga.Node.create();
    const node = Yoga.Node.create();
    root.insertChild(node, root.getChildCount());

    // @ts-expect-error
    node.setMeasureFunc(callback);

    root.calculateLayout(10, 10);
    expect(callback).toHaveBeenCalled();
    expect(root.getComputedLayout()).toContain({
      width: 10,
      height: 10,
    });
  });
});
