/* eslint-disable multiline-ternary */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import TextField from '@material-ui/core/TextField'
import { useDispatch } from 'react-redux'
import { changeDialog } from '../../redux/actionCreators'

// -----------------------------------style
import './dialog.css'

export interface Props {
    showDialog: boolean
    text: string
    focused: boolean
}

const Dialog = ({ showDialog, text, focused }: Props) => {
    const dispatch = useDispatch()
    const handleChangeTextField = (dialog: string) => {
        const newDialog: dialog = {
            body: dialog
        }
        dispatch(changeDialog(newDialog))
    }
    return (
        showDialog ? <div className='dialog'>
            <TextField onChange={(e) => handleChangeTextField(e.target.value)} focused={focused} id="standard-basic" label={text} />
        </div> : null
    )
}
export default Dialog