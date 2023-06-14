import Spinner from "./index";
import {Meta, StoryFn} from "@storybook/react";
import {ISpinnerOptions} from "./types";

export default {
    tags: ["autodocs"],
    title: "UI/Spinner",
    component: Spinner,
    args: {
        size: "sm",
        variant: "dark",
        animation: "border",
        loading: true,
        label: <>loading</>,
    },
    parameters: {
        controls: {
            exclude: [],
        },
    },
} as Meta<SpinnerStoryProps>;

type SpinnerStoryProps = Pick<ISpinnerOptions, "variant">;

const Template: StoryFn<SpinnerStoryProps> = args => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant: "primary",
};
