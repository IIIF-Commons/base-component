namespace _Components {
    export interface IBaseComponent {
        data(): Object;
        fire(event: string, ...args: any[]): EventEmitter;
        options: IBaseComponentOptions;
        set(data: Object): void;
    }
}