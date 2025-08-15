import { it, describe, expect } from "vitest";
import { readFile } from "node:fs/promises";
import { initYoga, initStreaming } from "../dist/index.js";
import { Yoga } from "./init.js";

describe("yoga-wasm-web", () => {
  it("should export initYoga function", () => {
    expect(typeof initYoga).toBe("function");
    expect(typeof initStreaming).toBe("function");
  });

  it("should initialize Yoga with WASM buffer", async () => {
    const wasmBuffer = await readFile(new URL("../dist/yoga.wasm", import.meta.url));
    const YogaInstance = await initYoga(wasmBuffer);
    
    expect(YogaInstance).toBeDefined();
    expect(YogaInstance.Node).toBeDefined();
    expect(typeof YogaInstance.Node.create).toBe("function");
  });

  it("should work with basic layout calculation", async () => {
    const node = Yoga.Node.create();
    node.setWidth(100);
    node.setHeight(100);
    node.calculateLayout();
    
    const layout = node.getComputedLayout();
    expect(layout).toMatchObject({
      width: 100,
      height: 100,
    });
    
    node.free();
  });

  it("should export all Yoga constants", async () => {
    // Check some key constants
    expect(Yoga.FLEX_DIRECTION_ROW).toBeDefined();
    expect(Yoga.FLEX_DIRECTION_COLUMN).toBeDefined();
    expect(Yoga.JUSTIFY_CENTER).toBeDefined();
    expect(Yoga.ALIGN_CENTER).toBeDefined();
    expect(Yoga.EDGE_LEFT).toBeDefined();
    expect(Yoga.UNIT_POINT).toBeDefined();
  });

  it("should handle complex layout scenarios", async () => {
    // Create a flex container with children
    const container = Yoga.Node.create();
    container.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    container.setJustifyContent(Yoga.JUSTIFY_SPACE_BETWEEN);
    container.setWidth(300);
    container.setHeight(100);

    const child1 = Yoga.Node.create();
    child1.setWidth(50);
    child1.setHeight(50);

    const child2 = Yoga.Node.create();
    child2.setWidth(50);
    child2.setHeight(50);

    container.insertChild(child1, 0);
    container.insertChild(child2, 1);

    container.calculateLayout();

    expect(container.getComputedLayout().width).toBe(300);
    expect(child1.getComputedLayout().left).toBe(0);
    expect(child2.getComputedLayout().left).toBe(250); // 300 - 50 = 250

    container.free();
    child1.free();
    child2.free();
  });

  it("should work with WebAssembly.Module", async () => {
    const wasmBuffer = await readFile(new URL("../dist/yoga.wasm", import.meta.url));
    const wasmModule = await WebAssembly.compile(new Uint8Array(wasmBuffer));
    const Yoga = await initYoga(wasmModule);
    
    expect(Yoga).toBeDefined();
    expect(Yoga.Node).toBeDefined();
    
    const node = Yoga.Node.create();
    node.setWidth(200);
    node.setHeight(200);
    node.calculateLayout();
    
    expect(node.getComputedLayout()).toMatchObject({
      width: 200,
      height: 200,
    });
    
    node.free();
  });
});
