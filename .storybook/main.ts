import { defineMain } from "@storybook/react-vite/node";

const config = defineMain({
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-docs", "./local-preset.ts"],
  framework: "@storybook/react-vite",
  features: {
    backgrounds: false,
    viewport: false,
    outline: false,
    measure: false,
    interactions: false,
    actions: false,
    controls: false,
  },
});

export default config;
