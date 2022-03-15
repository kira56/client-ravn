import React from "react";

const Modal = ({ children, idModal, title }) => {
    return (
        <div
            className="modal fade"
            id={idModal}
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            {title}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
