import React from "react";

const Orders = () => {
    return (
        <div className="mt-5">
            <div className="p-3 bg-body rounded shadow-sm list-group list-group-flush border-bottom scrollarea">
                <h6 className="border-bottom pb-2 mb-0">Orders</h6>

                <a
                    href="#"
                    className="list-group-item list-group-item-action py-3 lh-tight"
                    aria-current="true">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                        <strong className="mb-1">List group item heading</strong>
                        <small>Wed</small>
                    </div>
                    <div className="col-10 mb-1 small">
                        Some placeholder content in a paragraph below the heading and date.
                    </div>
                </a>
                <a
                    href="#"
                    className="list-group-item list-group-item-action py-3 lh-tight">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                        <strong className="mb-1">List group item heading</strong>
                        <small className="text-muted">Tues</small>
                    </div>
                    <div className="col-10 mb-1 small">
                        Some placeholder content in a paragraph below the heading and date.
                    </div>
                </a>
                <a
                    href="#"
                    className="list-group-item list-group-item-action py-3 lh-tight">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                        <strong className="mb-1">List group item heading</strong>
                        <small className="text-muted">Mon</small>
                    </div>
                    <div className="col-10 mb-1 small">
                        Some placeholder content in a paragraph below the heading and date.
                    </div>
                </a>

                <a
                    href="#"
                    className="list-group-item list-group-item-action py-3 lh-tight"
                    aria-current="true">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                        <strong className="mb-1">List group item heading</strong>
                        <small className="text-muted">Wed</small>
                    </div>
                    <div className="col-10 mb-1 small">
                        Some placeholder content in a paragraph below the heading and date.
                    </div>
                </a>

            </div>
        </div>
    );
};

export default Orders;
