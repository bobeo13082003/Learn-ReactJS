// class component
// function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";


class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'bo', age: '30' },
            { id: 2, name: 'Binh', age: '24' },
            { id: 3, name: 'Tuan', age: '56' }
        ]
    }

    //JSX
    render() {
        //DRY: don't repeat youseft
        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfor listUsers={this.state.listUsers} />
            </div>
        )

    }
}

export default MyComponent;