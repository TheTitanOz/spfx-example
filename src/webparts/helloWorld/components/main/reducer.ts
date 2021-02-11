import { ActionTypes, KnowActions } from './actionTypes';
import { Action, Reducer } from 'redux';
import { ICollectionData } from './interfaces';

export interface IHelloWorldState {
	title: string;
	collectionData: Array<ICollectionData>;
}

export const initialState: IHelloWorldState = {
	title: "",
	collectionData: [],
};

//Reducer determines how the state should change after every action.
export const HelloWorldReducer: Reducer<IHelloWorldState> = (state: IHelloWorldState = initialState, incomingAction: Action): IHelloWorldState => {
	const action = incomingAction as KnowActions;
    switch (action.type) {
		case ActionTypes.UPDATE_TITLE:
			return { ...state, title: action.payload };
		case ActionTypes.RESPONSE_GETSUMINISTROS:
			return {...state, collectionData: action.collectionData };
		default:
			return state;
    }
};
