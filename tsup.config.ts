import type { Options } from "tsup";

export const tsup: Options = {
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true, // 类型定义文件
  splitting: true, // 启用 cjs 代码分割
  clean: true, // 清空打包
};