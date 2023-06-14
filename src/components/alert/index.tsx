import {FC} from "react";
import {IAlertProps} from "./types";
import styles from "./style.module.scss";
import {AppIcons} from "../app-icons";
import {names} from "../../helpers/component-utils";

export const Alert: FC<IAlertProps> = props => {
    const bodyClassNames = [styles.body];

    switch (props.variant) {
        case "success":
            bodyClassNames.push(styles.bodySuccess);
            break;
        case "info":
            bodyClassNames.push(styles.bodyInfo);
            break;
        case undefined:
        case "danger":
            bodyClassNames.push(styles.bodyDanger);
            break;
        default:
            // custom class (when <Alert variant={styles.someClassName} .../>
            bodyClassNames.push(props.variant);
    }

    if (!props.message) {
        return null;
    }

    return (
        <div className={names(...bodyClassNames, props.className)}>
            <div className={styles.bodyMessage}>{props.message}</div>
            {props.onClose && (
                <button
                    type="button"
                    className={styles.bodyCloseBtn}
                    onClick={props.onClose}>
                    <AppIcons.Close />
                </button>
            )}
        </div>
    );
};
