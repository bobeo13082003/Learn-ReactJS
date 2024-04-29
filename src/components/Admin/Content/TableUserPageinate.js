import { useEffect, useState } from "react";
import axios from "axios";
import { getAllUser } from '../../../services/apiServices'
import ReactPaginate from 'react-paginate';


const TableUserPageinate = (props) => {
    const [pageCount, setPageCount] = useState(0);

    const { listUser } = props;

    const handlePageClick = (event) => {
        props.fetchListUserWithPageinate(+event.selected + 1)
        props.setCurrentPage(+event.selected + 1)
    };
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
                                        <button className="btn btn-secondary" onClick={() => props.handleClickBtnView(items)}>View</button>
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
            <div className="user-pageinate">
                <ReactPaginate
                    nextLabel="Next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={props.totalPage}
                    previousLabel="< Prev"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                    forcePage={props.currentPage - 1}
                />
            </div>
        </>
    )
}

export default TableUserPageinate