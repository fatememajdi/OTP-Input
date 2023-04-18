interface dialog {
    body: string
}

type dialogAction = {
    type: string
    dialog: dialog
}

type DispatchType = (args: dialogAction) => dialogAction