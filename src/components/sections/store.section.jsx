import React from "react";
import Image from "next/image";

const Store = () => {
    return (
        <section>
            <div className="text-center py-5">
                <h3>Products</h3>
            </div>
            <div className="d-flex row justify-content-end pb-4">
                <div className="col-4">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div className="col">
                    <div className="card mb-5 rounded-3 shadow-sm">
                        <img
                            height={350}
                            className="card-img-top"
                            src="/images/01.jpg"
                            alt="image_product"
                            style={{ objectFit: "cover" }}
                        />
                        <div className="card-body text-start">
                            <p className="card-text">Tortal de Vainilla</p>
                            <h5 className="card-title">$ 48.89</h5>
                        </div>
                        <div className="card-footer text-start">
                            <button type="button" className="btn btn-light">
                                View Detail
                            </button>
                            <button type="button" className="btn btn-outline-dark mx-4">
                                Add Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-5 rounded-3 shadow-sm">
                        <img
                            height={350}
                            className="card-img-top"
                            src="/images/02.jpg"
                            alt="image_product"
                            style={{ objectFit: "cover" }}
                        />
                        <div className="card-body text-start">
                            <p className="card-text">Tortal de Vainilla</p>
                            <h5 className="card-title">$ 48.89</h5>
                        </div>
                        <div className="card-footer text-start">
                            <button type="button" className="btn btn-light">
                                View Detail
                            </button>
                            <button type="button" className="btn btn-outline-dark mx-4">
                                Add Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-5 rounded-3 shadow-sm">
                        <img
                            height={350}
                            className="card-img-top"
                            src="/images/03.jpg"
                            alt="image_product"
                            style={{ objectFit: "cover" }}
                        />
                        <div className="card-body text-start">
                            <p className="card-text">Tortal de Vainilla</p>
                            <h5 className="card-title">$ 48.89</h5>
                        </div>
                        <div className="card-footer text-start">
                            <button type="button" className="btn btn-light">
                                View Detail
                            </button>
                            <button type="button" className="btn btn-outline-dark mx-4">
                                Add Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-5 rounded-3 shadow-sm">
                        <img
                            height={350}
                            className="card-img-top"
                            src="/images/02.jpg"
                            alt="image_product"
                            style={{ objectFit: "cover" }}
                        />
                        <div className="card-body text-start">
                            <p className="card-text">Tortal de Vainilla</p>
                            <h5 className="card-title">$ 48.89</h5>
                        </div>
                        <div className="card-footer text-start">
                            <button type="button" className="btn btn-light">
                                View Detail
                            </button>
                            <button type="button" className="btn btn-outline-dark mx-4">
                                Add Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#">
                            Previous
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            1
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            2
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            3
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            Next
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Store;
