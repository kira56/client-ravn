import React from "react";
import { useForm } from "@hooks/useform";
import { useDispatch } from "react-redux";
import { createCategory } from "src/actions/category.action";

const FormCategory = () => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange, reset] = useForm({
    name: '',
    code: ''
  })

  const { name, code } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCategory(formValues));
    reset();
  }

  return (
    <>
      <div className="modal-body">
        <form onSubmit={handleSubmit} className=" p-3">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Pies"
              required
              name="name"
              value={name}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="SKU001"
              name="code"
              value={code}
              onChange={handleInputChange}
            />
            <label htmlFor="floatingInput">Code</label>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal">
              Close
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Save
            </button>
          </div>
        </form>
      </div>

    </>
  );
};

export default FormCategory;
