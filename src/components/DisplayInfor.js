import React from "react";
import UserInfor from "./UserInfor";

class DisplayInfor extends React.Component {
    render() {
        // Distructuring array/object
        const { age, name } = this.props;
        return (
            <div>
                <div>My Name {name}</div>
                <div>My age {age}</div>
            </div>
        )
    }
}

export default DisplayInfor;