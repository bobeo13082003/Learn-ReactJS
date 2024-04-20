import React from "react";
import UserInfor from "./AddUserInfor";

class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true

    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {



        // Distructuring array/object
        const { listUsers } = this.props;
        // console.log(listUsers);
        // console.table(listUsers);
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list user" : "Show list user"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user) => {

                            return (
                                <div key={user.id} className={+user.age >= 30 ? "green" : "red"}>
                                    <div>My name {user.name}</div>
                                    <div>My age {user.age}</div>
                                    <hr />
                                </div>
                            )



                        })}
                        {/* <div>My Name {name}</div>
                <div>My age {age}</div> */}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfor;