/// <reference types="jquery" />
declare namespace _Components {
    class BaseComponent implements IBaseComponent {
        options: IBaseComponentOptions;
        protected _$element: JQuery;
        private _e;
        constructor(options: IBaseComponentOptions);
        protected _init(): boolean;
        data(): Object;
        on(name: string, callback: Function, ctx: any): void;
        fire(name: string, ...args: any[]): void;
        protected _resize(): void;
        set(data: Object): void;
    }
}
interface Window {
    _Components: any;
}
