/* eslint-disable eqeqeq */
/* eslint-disable react/no-direct-mutation-state */
import * as React from 'react'
interface IState {
    user: string
    userbuffer: string
}
class Description extends React.Component<IState> {
    public state: IState = {
        user: '',
        userbuffer: ''
    }

    public greet = () => {
        let user = ''
        if (this.state.user != '') { user = this.state.user + ', ' + this.state.userbuffer } else { user = this.state.userbuffer }
        this.setState({ user })
    }

    public stateChange = (event: any) => {
        this.state.userbuffer = event.target.value
    }

    public render() {
        return (
            <div>
                <p>Enter your name:
                    <input type="text" onChange={this.stateChange} />
                </p>
                <button onClick={this.greet}>Greet User</button>
                <p>Hello {this.state.user}</p>
            </div>
        )
    }
}
export default Description