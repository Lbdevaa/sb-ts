import styles from "./style.module.scss";
import {IButtonProps} from "./types";
import React from "react";
import Spinner from "../spinner";

export const Button: React.FC<IButtonProps> = props => {
    const bodyClassNames = [styles.main];
    const btnProps = {...props};
    delete btnProps.withSpinner;
    delete btnProps.variant;

    switch (props.variant) {
        case undefined:
        case "primary":
            bodyClassNames.push(styles.mainPrimary);
            break;
        case "danger":
            bodyClassNames.push(styles.mainDanger);
            break;
        case "secondary":
            bodyClassNames.push(styles.mainSecondary);
            break;
        case "link":
            bodyClassNames.length = 0;
            bodyClassNames.push(styles.link);
            break;
        case "placeholder-btn":
            bodyClassNames.length = 0;
            bodyClassNames.push(styles.placeholderBtn);
            break;
        case "text-btn":
            bodyClassNames.length = 0;
            bodyClassNames.push(styles.textBtn);
            break;
        case "small":
            bodyClassNames.length = 0;
            bodyClassNames.push(styles.small);
            break;
        case "redSmall":
            bodyClassNames.length = 0;
            bodyClassNames.push(styles.redSmall);
            break;
        case "graySmall":
            bodyClassNames.length = 0;
            bodyClassNames.push(styles.graySmall);
            break;
        // case "success":
        //     bodyClassNames.push(styles.mainSuccess);
        //     break;
        // case "info":
        //     bodyClassNames.push(styles.mainInfo);
        //     break;
        // case "warning":
        //     bodyClassNames.push(styles.mainWarning);
        //     break;
        // case "light":
        //     bodyClassNames.push(styles.mainLight);
        //     break;
        // case "dark":
        //     bodyClassNames.push(styles.mainDark);
        //     break;

        default:
            // custom class (when <Button variant={styles.someClassName} .../>
            bodyClassNames.push(props.variant);
    }

    if (props.className) {
        bodyClassNames.push(props.className);
    }

    return (
        <button
            type={"button"}
            {...btnProps}
            disabled={props.disabled || props.withSpinner}
            className={bodyClassNames.join(" ")}
        >
            {props.withSpinner ? (
                <Spinner label={props.children} loading animation={"border"} size={"sm"} />
            ) : (
                props.children
            )}
        </button>
    );
};
