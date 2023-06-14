import {Button} from "./index";
import {Meta, StoryFn} from "@storybook/react";
import {IButtonProps} from "./types";

export default {
    tags: ["autodocs"],
    title: "UI/Button",
    component: Button,
    args: {
        children: "Click me",
        variant: "primary",
    },
    // argTypes: {
    //   variant: {
    //     type: 'string',
    //     description: 'Вариант',
    //     defaultValue: 'primary',
    //     options: [
    //       'primary',
    //       'danger',
    //       'secondary',
    //       'link',
    //       'placeholder-btn',
    //       'text-btn',
    //       'small',
    //       'redSmall',
    //       'graySmall',
    //     ],
    //     control: {
    //       type: 'radio',
    //     },
    //   },
    //   withSpinner: {
    //     type: 'boolean',
    //     defaultValue: false,
    //     description: 'Spinner',
    //   },
    // },
    parameters: {
        controls: {
            exclude: [],
        },
    },
} as Meta<ButtonStoryProps>;

type ButtonStoryProps = Pick<IButtonProps, "variant">;

const Template: StoryFn<ButtonStoryProps> = args => <Button {...args} />;

// export const Default = () => <Button>Click me</Button>;
export const Default = Template.bind({});
Default.args = {
    variant: "primary",
};
