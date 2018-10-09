declare namespace _Components {
    interface IBaseComponent {
        data(): Object;
        on(name: string, callback: Function, ctx: any): void;
        fire(name: string, ...args: any[]): void;
        options: IBaseComponentOptions;
        set(data: Object): void;
    }
}
