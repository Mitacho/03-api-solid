import { Plugin } from "vite-tsconfig-paths";
import "vitest";

declare module "vitest" {
  interface UserConfigExport {
    plugins: Plugin[];
  }
}
