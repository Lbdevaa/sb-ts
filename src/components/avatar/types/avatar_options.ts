/**
 * Интерфейс свойств аватарки
 */
export interface IAvatarOptions {
    size: "sm" | "md" | "lg" | "xl" | "xxl" | "108";
    type: "rounded" | "square";
    bordered?: boolean;
    src: string | null;
    label: string | null;
    disabled?: boolean;
}
