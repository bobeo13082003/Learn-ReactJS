// class component
// function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";


class MyComponent extends React.Component {
    //JSX
    render() {
        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfor name="Bo Beo" age="25" />
            </div>
        )

    }
}

export default MyComponent;