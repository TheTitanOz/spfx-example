import { ActionTypes, KnowActions, UpdateTitleAction } from './actionTypes';
import { AppThunkAction } from '../../store/index';

import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";

export const ActionCreators = {
	setTitle: (payload: string) => ({ type: ActionTypes.UPDATE_TITLE, payload } as UpdateTitleAction),

	getListSuministros: () : AppThunkAction<KnowActions> => async (dispatch) => {
        // the query also works with select to choose certain fields and top to set the page size
		let items = await sp.web.lists.getByTitle("Clientes").items.select("ID,Title").top(50).getPaged<{Title: string}[]>();
		console.log(items.results);
		dispatch({ type: ActionTypes.RESPONSE_GETSUMINISTROS, collectionData: items.results });
    }

};
