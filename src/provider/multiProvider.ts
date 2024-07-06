import { createElement, type ReactNode } from "react";

interface MultiProviderProps {
    providers: JSX.Element[];
    children: ReactNode;
}

export const MultiProvider = ({
    providers,
    children,
}: MultiProviderProps): ReactNode => {
    let content: ReactNode = children;
    providers.forEach(({ type, props }) => {
        content = createElement(type, props, content);
    });
    return content;
};