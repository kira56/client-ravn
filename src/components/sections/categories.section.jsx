import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Modal from '@components/snippets/modal'
import FormCategory from '@components/snippets/form-category'
import EditCategory from '@components/snippets/edit-category'
import { useDispatch, useSelector } from "react-redux"
import { findCategories } from 'src/actions/category.action'
import { getCategory } from 'src/actions/category.action'


const Categories = () => {
    const dispatch = useDispatch();
    const { categories, category } = useSelector(state => state.category);

    const size = [5, 10, 15, 20, 25];
    const pages = [0, 1, 2, 3, 4, 5];
    const [sizePage, setSizePage] = useState(5)
    const [page, setPage] = useState(0)


    useEffect(() => {
        dispatch(findCategories(page, sizePage));
    }, [dispatch, sizePage, page])


    const editCategory = (category) => {
        dispatch(getCategory(category))
    }

    return (
        <div>
            <div className="d-flex justify-content-end mb-2">
                <button
                    data-bs-toggle="modal"
                    className="btn btn-primary"
                    data-bs-target="#exampleModal">
                    Add Category +
                </button>
            </div>
            <Modal title="Add Category" idModal="exampleModal">
                <FormCategory />
            </Modal>

            <Modal title="Edit Modal" idModal="editCategory">
                {
                    category !== null && <EditCategory />

                }
            </Modal>


            <div className="p-3 bg-body rounded shadow-sm">
                <h6 className="border-bottom pb-2 mb-0">Categories</h6>
                {
                    categories.length > 0 ? categories.map((category, index) =>
                        <div key={index} className="d-flex text-muted pt-3">
                            <svg
                                className="bd-placeholder-img flex-shrink-0 me-2 rounded"
                                width="32"
                                height="32"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-label="Placeholder: 32x32"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#007bff"></rect>
                                <text x="50%" y="50%" fill="#007bff" dy=".3em">
                                    32x32
                                </text>
                            </svg>

                            <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                                <div className="d-flex justify-content-between">
                                    <strong className="text-gray-dark">{category.name}</strong>
                                    <div>
                                        <button
                                            data-bs-toggle="modal"
                                            data-bs-target="#editCategory"
                                            onClick={() => editCategory(category)} className="btn btn-warning" href="#">
                                            Edit
                                        </button>
                                    </div>
                                </div>
                                <span className="d-block">
                                    <strong>Code: </strong>{category.code}
                                </span>
                            </div>
                        </div>
                    ) : <div className='py-5'>Empty</div>
                }
            </div>
            <div className='d-flex justify-content-end mt-4'>
                <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                    <button type="button" className="btn btn-outline-primary disabe">Prev</button>
                    {
                        pages.map((item, index) =>
                            <button key={index} type="button" className="btn btn-outline-primary" onClick={() => setPage(item)}>{item + 1}</button>
                        )
                    }
                    <button type="button" className="btn btn-outline-primary">Next</button>

                    <div className="btn-group mx-2" role="group">
                        <select className="form-select" onChange={(e) => setSizePage(e.target.value)} aria-label="Default select example">
                            {
                                size.map((item, index) =>
                                    <option key={index} value={item}>{item}</option>

                                )
                            }

                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories