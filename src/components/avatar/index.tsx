import React from "react";
import "./style.scss";
import {IAvatarOptions} from "./types";
import {getInitials} from "./helpers";

/**
 * Отображение аватарки пользователя
 * @param options
 * @constructor
 */
export const Avatar: React.FC<IAvatarOptions> = (options: IAvatarOptions) => {
    const image_src = `${process.env.REACT_APP_STATIC_SERVER}${options.src ?? "/avatars/default.svg"}`;
    const initials = getInitials(options.label ?? "");

    const className = `avatar avatar-${options.size ?? "default"} avatar-${options.type ?? "default"}${
        options.bordered ? " avatar--bordered" : ""
    } ${options.disabled ? "avatar-disableColor" : "avatar-defaultColor"}`;

    return (
        <div data-initials={initials} className={className}>
            {options.src && (
                <img
                    src={image_src}
                    alt=""
                    onError={event => {
                        // Внимание костыль! Удалить в случае необходимости.
                        // Если аватарку не получилось загрузить - то скрываем её
                        event.currentTarget.style.opacity = "0";
                    }}
                />
            )}
        </div>
    );
};

export default Avatar;
