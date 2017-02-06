// base-component v1.0.8 https://github.com/viewdir/base-component#readme
interface Window {
    _Components: any;
}
interface EventEmitter {
    on(event: string, callback: Function, ctx?: any): EventEmitter;
    once(event: string, callback: Function, ctx?: any): EventEmitter;
    emit(event: string, ...args: any[]): EventEmitter;
    off(event: string, callback?: Function): EventEmitter;
}

declare var TinyEmitter: any;
declare namespace _Components {
    class BaseComponent implements IBaseComponent {
        options: IBaseComponentOptions;
        protected _$element: JQuery;
        constructor(options: IBaseComponentOptions);
        protected _init(): boolean;
        data(): Object;
        _emit(event: string, ...args: any[]): EventEmitter;
        protected _resize(): void;
        set(data: Object): void;
    }
    function applyMixins(derivedCtor: any, baseCtors: any[]): void;
}

declare namespace _Components {
    interface IBaseComponent {
        options: IBaseComponentOptions;
        set(data: Object): void;
        data(): Object;
    }
}

declare namespace _Components {
    interface IBaseComponentOptions {
        target: HTMLElement;
        data?: any;
    }
}
