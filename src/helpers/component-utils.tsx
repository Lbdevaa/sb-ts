import React from "react";
import {skipFalsy} from "./arrays";

export const getSubChild = (children: JSX.Element[], displayName?: string): JSX.Element[] =>
    React.Children.map(children, child => (child.type.displayName === displayName ? child : null));

// Удобно применять для указания className
// className={names(styles.option, selected && styles.optionSelected)}
// className={[styles.option, selected ? styles.optionSelected : ""].join(' ')}
export function names(...classNames: (string | false | "" | null | undefined | number | 0)[]): string {
    return skipFalsy(...classNames).join(" ");
}
