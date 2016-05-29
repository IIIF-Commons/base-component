declare var EventEmitter2: IEventEmitter2;

namespace Components {
    export class BaseComponent implements IBaseComponent {
        
        public options: IBaseComponentOptions;
        protected _$element: JQuery;
        
        constructor(options: IBaseComponentOptions){
            this.options = $.extend(this._getDefaultOptions(), options);
        }
        
        protected _init(): boolean{
            this._$element = $(this.options.element);

            if (!this._$element.length){
                console.warn('element not found');
                return false;
            }
            
            this._$element.empty();

            return true;
        }
        
        protected _getDefaultOptions(): IBaseComponentOptions {
            return <IBaseComponentOptions>{};
        }
        
        protected emitEvent(event: string, ...args: any[]): void {
            (<any>this).emit(event, args);
        }
        
        protected _resize(): void {
            
        }
    }
    
    applyMixins(BaseComponent, [EventEmitter2]);
    
    function applyMixins(derivedCtor: any, baseCtors: any[]) {
        baseCtors.forEach(baseCtor => {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    }
}

module.exports = (function(w) {
    if (!w.Components){
        w.Components = Components;
    }
})(window);