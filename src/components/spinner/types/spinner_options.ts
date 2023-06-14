import React from "react";

export interface ISpinnerOptions {
    loading?: boolean;
    label?: JSX.Element | React.ReactNode | string | undefined;
    size?: "sm" | "md" | "lg" | undefined;
    variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | undefined;
    animation?: "border" | "grow";
}
