import React from "react";

class AddUserInfor extends React.Component {

    state = {
        name: 'Bo Beo',
        address: 'Bac Ninh',
        age: '21'
    }


    handleClick = (event) => {
        console.log('>> Click Me ');


        this.setState({
            name: 'BO',
            age: Math.floor(Math.random() * 100)
        })



    }

    handleOnchange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnchangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + 'random',
            name: this.state.name,
            age: this.state.age
        }

        );
    }


    render() {
        return (
            <div>
                My name is:
                {this.state.name} and I'm  {this.state.age}
                <button onClick={this.handleClick}>Clicks Me</button>

                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text"
                        value={this.state.name}
                        onChange={(event) => this.handleOnchange(event)}
                    />

                    <input type="text"
                        value={this.state.age}
                        onChange={(event) => this.handleOnchangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfor;