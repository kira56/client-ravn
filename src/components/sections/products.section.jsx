import React from "react";
import FormProduct from "@components/snippets/form-product";
import Modal from "@components/snippets/modal";

const Products = () => {
    return (
        <div>
            <div className="d-flex justify-content-end mb-2">
                <button
                    data-bs-toggle="modal"
                    type="button"
                    className="btn btn-primary"
                    data-bs-target="#exampleModal2">
                    Add Products +
                </button>
            </div>
            <Modal title="Add Product" idModal="exampleModal2">
                <FormProduct />
            </Modal>
            <div className="p-3 bg-body rounded shadow-sm">
                <h6 className="border-bottom pb-2 mb-0">Products</h6>
                <div className="d-flex text-muted pt-3">
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
                            <strong className="text-gray-dark">Product Name</strong>
                            <div>
                                <a className="px-2" href="#">
                                    Delete
                                </a>
                                <a className="px-2" href="#">
                                    Edit
                                </a>
                                <a className="px-2" href="#">
                                    View
                                </a>
                            </div>
                        </div>
                        <span className="d-block">S/. 78.88</span>
                    </div>
                </div>
                <div className="d-flex text-muted pt-3">
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
                            <strong className="text-gray-dark">Product Name</strong>
                            <div>
                                <a className="px-2" href="#">
                                    Delete
                                </a>
                                <a className="px-2" href="#">
                                    Edit
                                </a>
                                <a className="px-2" href="#">
                                    View
                                </a>
                            </div>
                        </div>
                        <span className="d-block">S/. 78.88</span>
                    </div>
                </div>
                <div className="d-flex text-muted pt-3">
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
                            <strong className="text-gray-dark">Product Name</strong>
                            <div>
                                <a className="px-2" href="#">
                                    Delete
                                </a>
                                <a className="px-2" href="#">
                                    Edit
                                </a>
                                <a className="px-2" href="#">
                                    View
                                </a>
                            </div>
                        </div>
                        <span className="d-block">S/. 78.88</span>
                    </div>
                </div>
                <div className="d-flex text-muted pt-3">
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
                            <strong className="text-gray-dark">Product Name</strong>
                            <div>
                                <a className="px-2" href="#">
                                    Delete
                                </a>
                                <a className="px-2" href="#">
                                    Edit
                                </a>
                                <a className="px-2" href="#">
                                    View
                                </a>
                            </div>
                        </div>
                        <span className="d-block">S/. 78.88</span>
                    </div>
                </div>
                <div className="d-flex text-muted pt-3">
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
                            <strong className="text-gray-dark">Product Name</strong>
                            <div>
                                <a className="px-2" href="#">
                                    Delete
                                </a>
                                <a className="px-2" href="#">
                                    Edit
                                </a>
                                <a className="px-2" href="#">
                                    View
                                </a>
                            </div>
                        </div>
                        <span className="d-block">S/. 78.88</span>
                    </div>
                </div>
                <small className="d-block text-end mt-3">
                    <a href="#">All suggestions</a>
                </small>
            </div>
        </div>
    );
};

export default Products;
