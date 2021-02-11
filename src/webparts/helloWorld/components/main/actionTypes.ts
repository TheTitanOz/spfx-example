import { ICollectionData } from './interfaces';

export enum ActionTypes {
	UPDATE_TITLE,
	RESPONSE_GETSUMINISTROS,
}

export interface GetSuministrosAction { type: ActionTypes.RESPONSE_GETSUMINISTROS; collectionData: Array<ICollectionData> }
export interface UpdateTitleAction { type: ActionTypes.UPDATE_TITLE; payload: string }

export type KnowActions =
	GetSuministrosAction |
	UpdateTitleAction;
