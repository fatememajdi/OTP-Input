/* eslint-disable object-shorthand */
import * as actionTypes from './actionTypes'

export function changeDialog(dialog: dialog) {
    return {
        type: actionTypes.CHANGE_DIALOG,
        dialog: dialog
    }
}