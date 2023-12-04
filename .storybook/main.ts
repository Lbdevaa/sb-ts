/** @type { import('@storybook/react-vite').StorybookConfig } */
import type {StorybookConfig} from "@storybook/react-webpack5";

const config: StorybookConfig = {
    // stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
    // staticDirs: ['../public'],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/preset-create-react-app",
        // {
        //     name: "@storybook/addon-styling",
        //     options: {
        //         sass: {
        //             // Require Sass preprocessor here
        //             implementation: require("sass"),
        //         },
        //     },
        // },
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    docs: {
        autodocs: "tag",
        defaultName: "Documentation",
    },
    // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
    typescript: {
        check: true, // type-check stories during Storybook build
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false,
            },
            propFilter: () => true,
        },
    }
    // ,
    // webpackFinal: async (config, {configType}) => {
    //     // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    //     // You can change the configuration based on that.
    //     // 'PRODUCTION' is used when building the static version of storybook.

    //     // Make whatever fine-grained changes you need
    //     if (config.module && config.module.rules) {
    //         config.module.rules = [
    //             ...config.module.rules.map(rule => {
    //                 if (/svg/.test(rule.test)) {
    //                     // Silence the Storybook loaders for SVG files
    //                     return {...rule, exclude: /\.svg$/i};
    //                 }
    //                 return rule;
    //             }),
    //             // Add your custom SVG loader
    //             {
    //                 test: /\.svg$/i,
    //                 use: ["@svgr/webpack"],
    //             },
    //         ];
    //     }

    //     // Return the altered config
    //     return config;
    // },
};
export default config;
