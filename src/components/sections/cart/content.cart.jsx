import React from "react";

const CartContent = () => {
    return (
        <section>
            <h4 className="mb-3">Cart Items</h4>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price Unit.</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>
                            <div className="d-flex">
                                <svg
                                    className="bd-placeholder-img flex-shrink-0 me-2 rounded"
                                    width="50"
                                    height="50"
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
                                <div className="px-3">
                                    <p>
                                        Product Name <br />
                                        SKU001 <br />
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td>S/ 48.98</td>
                        <td>
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
                                    2
                                </button>
                                <button type="button" className="btn btn-outline-primary">
                                    +
                                </button>
                            </div>
                        </td>
                        <td>S/. 98.89</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={4} className="text-end">
                            Total:
                        </th>
                        <th>$7,750.00</th>
                    </tr>
                </tfoot>
            </table>
            <div className="d-flex justify-content-end">
                <button className="btn btn-outline-primary mx-4">
                    Process To Checkout
                </button>
                <button className="btn btn-primary">Back To Store</button>
            </div>
        </section>
    );
};

export default CartContent;
