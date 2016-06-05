// base-component v1.0.1 https://github.com/edsilv/base-component#readme

declare var EventEmitter2: IEventEmitter2;
declare namespace Components {
    class BaseComponent implements IBaseComponent {
        options: IBaseComponentOptions;
        protected _$element: JQuery;
        constructor(options: IBaseComponentOptions);
        protected _init(): boolean;
        protected _getDefaultOptions(): IBaseComponentOptions;
        protected _emit(event: string, ...args: any[]): void;
        protected _resize(): void;
    }
    function applyMixins(derivedCtor: any, baseCtors: any[]): void;
}

declare namespace Components {
    interface IBaseComponent {
        options: IBaseComponentOptions;
    }
}

declare namespace Components {
    interface IBaseComponentOptions {
        element?: string;
    }
}
