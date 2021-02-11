import * as HelloWorld from '../components/main/reducer' ;

export interface ApplicationState {
    helloWorld: HelloWorld.IHelloWorldState | undefined;
}

export const reducers = {
    helloWorld: HelloWorld.HelloWorldReducer,
};

export interface AppThunkAction<TAction> {
    //(dispatch: (action: TAction | AppThunkAction<TAction>) => void, getState: () => ApplicationState): void;
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}