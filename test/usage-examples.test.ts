import { it, describe, expect } from "vitest";
import { readFile } from "node:fs/promises";
import { initYoga, initStreaming } from "../dist/index.js";
import { Yoga } from "./init.js";

describe("usage examples", () => {
  describe("Node.js usage", () => {
    it("should work with fs.readFile", async () => {
      // Example: Node.js usage with fs.readFile
      const wasmBuffer = await readFile(new URL("../dist/yoga.wasm", import.meta.url));
      const YogaInstance = await initYoga(wasmBuffer);
      
      const node = YogaInstance.Node.create();
      node.setWidth(100);
      node.setHeight(50);
      node.calculateLayout();
      
      expect(node.getComputedLayout()).toMatchObject({
        width: 100,
        height: 50,
      });
      
      node.free();
    });

    it("should work with createRequire", async () => {
      // Example: Node.js usage with createRequire (for published package)
      const { createRequire } = await import("node:module");
      const require = createRequire(import.meta.url);
      
      // Simulate how it would work with the published package
      const wasmPath = require.resolve("../dist/yoga.wasm");
      const wasmBuffer = await readFile(wasmPath);
      const Yoga = await initYoga(wasmBuffer);
      
      expect(Yoga.Node).toBeDefined();
      
      const node = Yoga.Node.create();
      node.setWidth(200);
      node.calculateLayout();
      
      expect(node.getComputedLayout().width).toBe(200);
      node.free();
    });
  });

  describe("Browser usage", () => {
    it.skip("should work with fetch", async () => {
      // Skipped in Node.js environment as fetch is not available for file:// URLs
      // Example: Browser usage with fetch
      const wasmUrl = new URL("../dist/yoga.wasm", import.meta.url);
      const response = await fetch(wasmUrl);
      const wasmBuffer = await response.arrayBuffer();
      const Yoga = await initYoga(wasmBuffer);
      
      const container = Yoga.Node.create();
      container.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
      container.setWidth(300);
      
      const child1 = Yoga.Node.create();
      child1.setFlexGrow(1);
      
      const child2 = Yoga.Node.create();
      child2.setWidth(100);
      
      container.insertChild(child1, 0);
      container.insertChild(child2, 1);
      container.calculateLayout();
      
      expect(child1.getComputedLayout().width).toBe(200); // 300 - 100
      expect(child2.getComputedLayout().width).toBe(100);
      
      container.free();
      child1.free();
      child2.free();
    });

    it.skip("should work with streaming instantiation", async () => {
      // Skipped in Node.js environment as fetch is not available for file:// URLs
      // Example: Browser usage with streaming instantiation (for large WASM files)
      const wasmUrl = new URL("../dist/yoga.wasm", import.meta.url);
      const response = fetch(wasmUrl);
      const Yoga = await initStreaming(response);
      
      expect(Yoga.Node).toBeDefined();
      
      const node = Yoga.Node.create();
      node.setWidth(150);
      node.calculateLayout();
      
      expect(node.getComputedLayout().width).toBe(150);
      node.free();
    });
  });

  describe("Edge runtime usage", () => {
    it("should work with imported WASM module", async () => {
      // Example: Edge runtime (Cloudflare Workers) usage
      // In real edge environments, you would do: import wasmModule from "./yoga.wasm"
      // Here we simulate it by compiling the WASM
      const wasmBuffer = await readFile(new URL("../dist/yoga.wasm", import.meta.url));
      const wasmModule = await WebAssembly.compile(new Uint8Array(wasmBuffer));
      const Yoga = await initYoga(wasmModule);
      
      // Test a typical edge use case: generating layouts for dynamic content
      const card = Yoga.Node.create();
      card.setFlexDirection(Yoga.FLEX_DIRECTION_COLUMN);
      card.setAlignItems(Yoga.ALIGN_CENTER);
      card.setJustifyContent(Yoga.JUSTIFY_CENTER);
      card.setWidth(300);
      card.setHeight(200);
      card.setPadding(Yoga.EDGE_ALL, 20);
      
      const title = Yoga.Node.create();
      title.setHeight(30);
      title.setMargin(Yoga.EDGE_BOTTOM, 10);
      title.setFlexShrink(0); // Prevent shrinking below set height
      
      const content = Yoga.Node.create();
      content.setFlexGrow(1);
      
      card.insertChild(title, 0);
      card.insertChild(content, 1);
      card.calculateLayout();
      
      expect(card.getComputedLayout()).toMatchObject({
        width: 300,
        height: 200,
      });
      
      // Layout calculation completed successfully
      expect(card.getComputedLayout().width).toBe(300);
      expect(card.getComputedLayout().height).toBe(200);
      
      card.free();
      title.free();
      content.free();
    });
  });

  describe("Universal usage patterns", () => {
    it("should handle responsive-like layouts", async () => {
      // Example: Creating a responsive grid
      const grid = Yoga.Node.create();
      grid.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
      grid.setFlexWrap(Yoga.WRAP_WRAP);
      grid.setJustifyContent(Yoga.JUSTIFY_SPACE_BETWEEN);
      grid.setWidth(600);
      
      // Create 6 items that wrap to 2 rows
      const items: any[] = [];
      for (let i = 0; i < 6; i++) {
        const item = Yoga.Node.create();
        item.setWidth(180); // ~30% of container width
        item.setHeight(100);
        item.setMargin(Yoga.EDGE_BOTTOM, 20);
        items.push(item);
        grid.insertChild(item, i);
      }
      
      grid.calculateLayout();
      
      // First row
      expect(items[0].getComputedLayout().left).toBe(0);
      expect(items[1].getComputedLayout().left).toBe(210); // space-between positioning
      expect(items[2].getComputedLayout().left).toBe(420);
      
      // Second row
      expect(items[3].getComputedLayout().top).toBe(120); // 100 + 20 margin
      expect(items[4].getComputedLayout().top).toBe(120);
      expect(items[5].getComputedLayout().top).toBe(120);
      
      // Clean up
      grid.free();
      items.forEach(item => item.free());
    });

    it("should handle complex nested layouts", async () => {
      // Example: App layout with header, sidebar, main content, and footer
      const app = Yoga.Node.create();
      app.setFlexDirection(Yoga.FLEX_DIRECTION_COLUMN);
      app.setWidth(1200);
      app.setHeight(800);
      
      const header = Yoga.Node.create();
      header.setHeight(60);
      header.setFlexShrink(0);
      
      const body = Yoga.Node.create();
      body.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
      body.setFlexGrow(1);
      
      const sidebar = Yoga.Node.create();
      sidebar.setWidth(250);
      sidebar.setFlexShrink(0);
      
      const main = Yoga.Node.create();
      main.setFlexGrow(1);
      main.setPadding(Yoga.EDGE_ALL, 20);
      
      const footer = Yoga.Node.create();
      footer.setHeight(40);
      footer.setFlexShrink(0);
      
      // Assemble the layout
      body.insertChild(sidebar, 0);
      body.insertChild(main, 1);
      
      app.insertChild(header, 0);
      app.insertChild(body, 1);
      app.insertChild(footer, 2);
      
      app.calculateLayout();
      
      expect(header.getComputedLayout()).toMatchObject({ width: 1200, height: 60 });
      expect(sidebar.getComputedLayout()).toMatchObject({ width: 250, height: 700 }); // 800 - 60 - 40
      expect(main.getComputedLayout()).toMatchObject({ width: 950, height: 700 }); // 1200 - 250
      expect(footer.getComputedLayout()).toMatchObject({ width: 1200, height: 40 });
      
      // Clean up
      app.free();
      header.free();
      body.free();
      sidebar.free();
      main.free();
      footer.free();
    });
  });
});
