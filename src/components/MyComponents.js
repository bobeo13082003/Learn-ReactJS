// class component
// function component

import React from "react";


class MyComponent extends React.Component {

    state = {
        name: 'Bo Beo',
        address: 'Bac Ninh',
        age: 21
    }


    handleClick(even) {
        // console.log('>> Click Me ');
        // console.log(even);
    }


    handleOnMouseOver(even) {
        console.log(even);
    }

    //JSX
    render() {
        return (
            <div>
                My name is:

                {this.state.name} and I'm from {this.state.address}
                <button handleOnMouseOver={this.handleOnMouseOver}>Hover Me</button>

            </div>
        )

    }
}

export default MyComponent;