namespace _Components {
    export interface IBaseComponent {
        options: IBaseComponentOptions;
        set(data: Object): void;
        data(): Object;
    }
}