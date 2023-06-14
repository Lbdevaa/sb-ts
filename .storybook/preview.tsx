/** @type { import('@storybook/react').Preview } */
import "!style-loader!css-loader!sass-loader!../src/styles/main.scss";
import {Preview} from "@storybook/react";

import {Title, Subtitle, Description, Primary, Controls, Stories} from "@storybook/blocks";
import React from "react";

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: "^on[A-Z].*"},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    <Primary />
                    <Controls />
                    <Stories />
                </>
            ),
        },
    },
};

export default preview;
