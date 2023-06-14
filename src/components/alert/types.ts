export interface IAlertProps {
    message?: string | JSX.Element;
    onClose?: () => void;
    variant?: "danger" | "info" | "success";
    className?: string;
}
