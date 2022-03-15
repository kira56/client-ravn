import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { editCategory } from 'src/actions/category.action';

const EditCategory = () => {

  const dispatch = useDispatch();
  const { category } = useSelector(state => state.category);


  const [success, setSuccess] = useState(false)
  const [saveCategory, setSaveCategory] = useState({
    name: '',
    code: ''
  })

  useEffect(() => {
    setSaveCategory(category)
  }, [category])

  const handleChange = (e) => {
    setSaveCategory({
      ...saveCategory,
      [e.target.name]: e.target.value
    })
  }

  const { name, code } = saveCategory;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() !== '' || code.trim() !== '') {
      dispatch(editCategory(saveCategory))
    
    }

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
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="SKU001"
              required
              name="code"
              value={code}
              onChange={handleChange}
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
              data-bs-dismiss={success ? "modal" : ""}
            >
              Save
            </button>
          </div>
        </form>
      </div>

    </>
  )
}

export default EditCategory