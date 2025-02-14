import { defineConfig, loadEnv } from "vite";

import react from "@vitejs/plugin-react-swc"; // 支持react的热更新、JSX转换

import { visualizer } from "rollup-plugin-visualizer"; // 用于可视化构建的插件，分析打包体积
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"; // 将svg 转换为 react组件
import tsconfigPaths from "vite-tsconfig-paths"; // TypeScript路径别名解析

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = env.VITE_APP_BASE_PATH || "/";
  const isProduction = mode === "production";
  console.log(base);
  return {
    base,
    plugins: [
      react(),
      tsconfigPaths(),
      // createSvgIconsPlugin({}),
      isProduction &&
        visualizer({
          open: true,
          gzipSize: true,
          brotliSize: true,
        }),
    ],
    server: {
      open: true,
      host: true,
      prot: 5173,
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    optimizeDeps: {
      include: ["react", "react-dom", "react-router", "antd"],
    },
    esbuild: {
      drop: isProduction ? ["console", "debugger"] : [],
    },
    build: {
      target: "esnext",
      minify: "esbuild",
      sourcemap: false,
      cssCodeSplit: true,
      chunkSizeWarningLimit: 1000, // 提高警告阈值到 1000 KB

      rollupOptions: {
        output: {
          // 手动分块
          manualChunks: {
            "vendor-react": ["react", "react-dom", "react-router"],
            "vendor-antd": ["antd", "@ant-design/icons", "@ant-design/cssinjs"],
            "vendor-utils": ["axios", "dayjs", "i18next", "zustand"],
            "vendor-ui": [
              "motion", // 动画库
              "styled-components",
            ],
          },
        },
      },
    },
  };
});
