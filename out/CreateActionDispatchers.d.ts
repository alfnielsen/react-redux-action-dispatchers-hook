import { Dispatch } from 'redux';
declare type IActionsMap<T extends Record<keyof T, (...args: any) => any>> = {
    [K in keyof T]: (...args: Parameters<T[K]>) => ReturnType<Dispatch>;
};
export declare const TransformActions: <T extends Record<keyof T, (...args: any) => any>>(dispatch: Dispatch<import("redux").AnyAction>, actionCreatorMap: T) => IActionsMap<T>;
declare const useCreateActionDispatchers: <T extends Record<keyof T, (...args: any) => any>>(actionCreatorMap: T) => IActionsMap<T>;
export default useCreateActionDispatchers;
