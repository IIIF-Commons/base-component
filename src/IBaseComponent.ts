namespace _Components {
    export interface IBaseComponent{
        options: IBaseComponentOptions;
        databind(data: any): void;
    }
}