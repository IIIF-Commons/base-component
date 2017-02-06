declare var TinyEmitter: any;

namespace _Components {
    export class BaseComponent implements IBaseComponent {

        public options: IBaseComponentOptions;
        protected _$element: JQuery;

        constructor(options: IBaseComponentOptions) {
            this.options = options;
            this.options.data = $.extend(this.data(), options.data);
        }

        protected _init(): boolean {
            this._$element = $(this.options.target);

            if (!this._$element.length){
                console.warn('element not found');
                return false;
            }

            this._$element.empty();

            return true;
        }

        public data(): Object {
            return {};
        }

        public _emit(event: string, ...args: any[]): EventEmitter {
            return (<any>this).emit(event, args);
        }

        protected _resize(): void {

        }

        public set(data: Object): void {

        }
    }

    export function applyMixins(derivedCtor: any, baseCtors: any[]) {
        baseCtors.forEach(baseCtor => {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    }

    applyMixins(BaseComponent, [TinyEmitter]);
}

(function(g: any) {
    if (!g._Components){
        g._Components = _Components;
    }
})(global);
