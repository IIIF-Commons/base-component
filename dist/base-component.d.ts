// base-component v1.0.5 https://github.com/viewdir/base-component#readme
declare class EventEmitter {
  on   (event: string, callback: Function, ctx?: any): EventEmitter;
  once (event: string, callback: Function, ctx?: any): EventEmitter;
  emit (event: string, ...args: any[]): EventEmitter;
  off  (event: string, callback?: Function): EventEmitter;
}
export = EventEmitter

interface Window {
    _Components: any;
}

declare const TinyEmitter: any;
declare type EventEmitter = any;
declare namespace _Components {
    class BaseComponent implements IBaseComponent {
        options: IBaseComponentOptions;
        protected _$element: JQuery;
        constructor(options: IBaseComponentOptions);
        protected _init(): boolean;
        protected _getDefaultOptions(): IBaseComponentOptions;
        protected _on(event: string, callback: Function, ctx?: any): EventEmitter;
        protected _once(event: string, callback: Function, ctx?: any): EventEmitter;
        protected _emit(event: string, ...args: any[]): EventEmitter;
        protected _off(event: string, callback?: Function): EventEmitter;
        protected _resize(): void;
        databind(data?: any): void;
    }
    function applyMixins(derivedCtor: any, baseCtors: any[]): void;
}

declare namespace _Components {
    interface IBaseComponent {
        options: IBaseComponentOptions;
        databind(data?: any): void;
    }
}

declare namespace _Components {
    interface IBaseComponentOptions {
        element?: string;
    }
}
