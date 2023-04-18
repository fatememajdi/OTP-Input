/* eslint-disable no-return-assign */
/* eslint-disable no-case-declarations */
import * as actionTypes from './actionTypes'

const initialState: dialog = {
    body: "I'm a dialog "
}

const reducer = (
    state: dialog = initialState,
    action: dialogAction
): dialog => {
    switch (action.type) {
        case actionTypes.CHANGE_DIALOG:
            const newDialog: dialog = {
                body: action.dialog.body
            }
            state = newDialog
            return state
    }
    return state
}

export default reducer