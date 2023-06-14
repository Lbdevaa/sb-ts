import {Meta, StoryFn} from "@storybook/react";
import Avatar from ".";
import {IAvatarOptions} from "./types";

export default {
    tags: ["autodocs"],
    title: "UI/Avatar",
    component: Avatar,
    args: {
        size: "lg",
        type: "rounded",
        src: null,
        label: "A",
    },
    parameters: {
        controls: {
            exclude: [],
        },
    },
} as Meta<IAvatarOptions>;

// type AvatarStoryProps = Pick<IAvatarOptions, "size" | "type" | "label">;

const Template: StoryFn<IAvatarOptions> = args => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {};
