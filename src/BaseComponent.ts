declare var EventEmitter2: IEventEmitter2;
declare var define: any;

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
        
        protected _emit(event: string, ...args: any[]): void {
            (<any>this).emit(event, args);
        }
        
        protected _resize(): void {
            
        }

        public databind(data: any): void {
            
        }
    }

    export function applyMixins(derivedCtor: any, baseCtors: any[]) {
        baseCtors.forEach(baseCtor => {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    }
    
    applyMixins(BaseComponent, [EventEmitter2]);
}

if ( typeof module === "object" && module && typeof module.exports === "object" ) {
	module.exports = Components;
} else {
	window.Components = Components;
	if ( typeof define === "function" && define.amd ) {
		define( "Components", [], function () { return Components; } );
	}
}