// base-component v1.0.9 https://github.com/viewdir/base-component#readme
/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />
interface Window {
    _Components: any;
}

/// <reference types="jquery" />
declare var TinyEmitter: any;
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

declare namespace _Components {
    interface IBaseComponent {
        data(): Object;
        on(name: string, callback: Function, ctx: any): void;
        fire(name: string, ...args: any[]): void;
        options: IBaseComponentOptions;
        set(data: Object): void;
    }
}

declare namespace _Components {
    interface IBaseComponentOptions {
        target: HTMLElement;
        data?: any;
    }
}
