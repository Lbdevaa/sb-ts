import {Meta, StoryFn} from "@storybook/react";
import {IAlertProps} from "./types";
import {Alert} from "./";

/**
 * Primary UI component for display alerts
 */

export default {
    tags: ["autodocs"],
    title: "UI/Alert",
    component: Alert,
    args: {
        message: "error",
    },
    parameters: {
        controls: {
            exclude: [],
        },
    },
} as Meta<AlertStoryProps>;

type AlertStoryProps = Pick<IAlertProps, "variant">;

const Template: StoryFn<AlertStoryProps> = args => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {};
