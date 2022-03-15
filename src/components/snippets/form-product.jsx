import React from "react";

const FormProduct = () => {
    return (
        <form className=" p-3">
            <div className="form-floating">
                <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Pies"
                />
                <label htmlFor="floatingInput">Name Product</label>
            </div>
            <div className="form-floating">
                <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="SKU001"
                />
                <label htmlFor="floatingInput">Code</label>
            </div>
            <div className="form-floating">
                <input
                    type="number"
                    className="form-control"
                    id="floatingInput"
                    placeholder="SKU001"
                />
                <label htmlFor="floatingInput">Price</label>
            </div>
            <div className="form-floating">
                <input
                    type="number"
                    className="form-control"
                    id="floatingInput"
                    placeholder="SKU001"
                />
                <label htmlFor="floatingInput">Stock</label>
            </div>
            <div className="form-floating">
                <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: 100 }}></textarea>
                <label htmlFor="floatingTextarea2">Description</label>
            </div>
        </form>
    );
};

export default FormProduct;
