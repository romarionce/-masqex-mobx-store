import type { ReactNode } from "react";
import { createStoreContext, useProvider, useStore } from "../hooks/useStore";

interface StoreClass<T> {
    new(...args: any[]): T;
}

// Класс Store
export class Store<T> {
    private ctx: React.Context<T | undefined>;

    constructor(_classType?: StoreClass<T>) {
        this.ctx = createStoreContext<T>();
    }

    // Метод для получения хранилища
    store = () => useStore(this.ctx);

    // Метод для предоставления значения через провайдер
    Provider = ({ children, value }: { value: T; children?: ReactNode }) => {
        return useProvider(this.ctx, value, children);
    };
    provider = (value: T) => useProvider(this.ctx, value);
}