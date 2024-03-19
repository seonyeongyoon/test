import react from "@vitejs/plugin-react";
import { env } from "node:process";
import { defineConfig, loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
// const isDev = env.NODE_ENV === "development";
// const envLoad = loadEnv(isDev, process.cwd());

export default defineConfig({
  plugins: [
    react(),
    // Configure HTML plugin
    // createHtmlPlugin({
    //   minify: !isDev,
    //   inject: {
    //     data: {
    //       kakaoJsKey: envLoad.REACT_APP_KAKAO_KEY, // Access environment variables using import.meta.env
    //     },
    //   },
    // }),
  ],
});
