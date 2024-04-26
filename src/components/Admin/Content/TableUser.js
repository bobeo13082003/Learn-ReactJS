import { useEffect, useState } from "react";
import axios from "axios";
import { getAllUser } from '../../../services/apiServices'
const TableUser = (props) => {
    const { listUser } = props;
    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 &&
                        listUser.map((items, index) => {
                            return (
                                <tr key={`table-user-${index}`}>
                                    <td>{items.id}</td>
                                    <td>{items.username}</td>
                                    <td>{items.email}</td>
                                    <td>{items.role}</td>
                                    <td style={{ width: '300px' }}>
                                        <button className="btn btn-secondary">View</button>
                                        <button className="btn btn-warning" onClick={() => props.handleClickBtnUpdate(items)}>Update</button>
                                        <button className="btn btn-danger" onClick={() => props.handleClickBtnDelete(items)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {listUser && listUser.length === 0 &&
                        <tr>
                            <td colSpan={'4'}>Not Found Data</td>
                        </tr>
                    }
                </tbody>
            </table>

        </>
    )
}

export default TableUser;