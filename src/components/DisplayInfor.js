import React from "react";
import UserInfor from "./AddUserInfor";
import './DisplayInfor.scss'
import logo from './../logo.svg'

class DisplayInfor extends React.Component {
    constructor(props) {
        console.log('>>> call constructor')
        super(props);
        this.state = {
            isShowListUser: true

        }
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    componentDidMount() {
        console.log('>>> call me ');
        setTimeout(() => {
            document.title = 'Bo beo'
        }, 3000);
    }

    render() {

        console.log('>> call render')

        // Distructuring array/object
        const { listUsers } = this.props;
        // console.log(listUsers);
        // console.table(listUsers);
        return (
            <div className="display-infor-container">
                {/* <img src={logo} /> */}

                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list user" : "Show list user"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user) => {

                            return (
                                <div key={user.id} className={+user.age >= 30 ? "green" : "red"}>
                                    <div>
                                        <div>My name {user.name}</div>
                                        <div>My age {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                    <hr />
                                </div>

                            )



                        })}
                        {/* <div>My Name {name}</div>
                <div>My age {age}</div> */}
                    </>
                }
            </div>
        )
    }
}

export default DisplayInfor;