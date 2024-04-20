// class component
// function component

import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";


class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: 'bo', age: '30' },
            { id: 2, name: 'Binh', age: '24' },
            { id: 3, name: 'Tuan', age: '56' }
        ]
    }

    handleAddNewUser = (objUser) => {

        this.setState({
            listUsers: [objUser, ...this.state.listUsers]
        })


    }

    handleDeleteUser = (userId) => {
        let listUsersClone = this.state.listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        this.setState({
            listUsers: listUsersClone
        })

    }

    //JSX
    render() {
        //DRY: don't repeat youseft
        return (
            <>
                <div className="a">
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br />
                    <DisplayInfor listUsers={this.state.listUsers}
                        handleDeleteUser={this.handleDeleteUser}
                    />
                </div>
                <div className="b"></div>
            </>
        )

    }
}

export default MyComponent;