import {ButtonHTMLAttributes} from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?:
        | "primary"
        | "secondary"
        | "danger"
        | "link"
        | "placeholder-btn"
        | "small"
        | "redSmall"
        | "graySmall"
        | "text-btn"
        | undefined;
    withSpinner?: boolean;
}
