import React from "react";
import { useRouter } from "next/router";

const CanvasCart = () => {
    const router = useRouter();

    return (
        <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">Cart List</h5>
                <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                />
            </div>
            <div className="offcanvas-body">
                <div className="list-group list-group-flush border-bottom scrollarea">
                    <div className="list-group-item  py-3 lh-tight">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <svg
                                    className="bd-placeholder-img flex-shrink-0 me-2 rounded"
                                    width="70"
                                    height="70"
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
                                <div>
                                    <p>
                                        Product Name <br />
                                        SKU001 <br />
                                        <strong>S/. 58.89</strong>
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex flex-column align-items-end">
                                <button className="btn btn-close btn-sm mb-3" />
                                <div
                                    className="btn-group btn-group-sm"
                                    role="group"
                                    aria-label="Basic outlined example">
                                    <button type="button" className="btn btn-outline-primary">
                                        -
                                    </button>
                                    <button
                                        type="button"
                                        disabled
                                        className="btn btn-outline-primary">
                                        1
                                    </button>
                                    <button type="button" className="btn btn-outline-primary">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas-footer p-3">
                <button
                    data-bs-dismiss="offcanvas"
                    className="btn btn-outline-primary w-100 mb-3"
                    onClick={() => router.push("/checkout")}>
                    Proccess Checkout
                </button>
                <button
                    className="btn btn-primary w-100"
                    data-bs-dismiss="offcanvas"
                    onClick={() => router.push("/cart")}>
                    View Cart
                </button>
            </div>
        </div>
    );
};

export default CanvasCart;
