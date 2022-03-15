import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "@hooks/useform";
import { allRols } from "src/actions/rol.action";
import { signup } from "src/actions/auth.action";

const FormSignup = () => {
    const dispatch = useDispatch();

    const { rols } = useSelector((state) => state.rol)
    const { msgError } = useSelector((state) => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: "",
        surname: "",
        email: "",
        password: "",
        roleId: 2
    });

    useEffect(() => {
        dispatch(allRols())
    }, [dispatch, msgError])

    const { name, surname, email, password, roleId } = formValues

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(formValues))
    };

    const isFormValid = (name) => {
        if (msgError?.errors !== undefined) {
            const err = msgError?.errors.find(item => item.param === name.toLowerCase());
            return <label htmlFor="floatingInput" className="error text-danger">{err?.msg}</label>
        } else {
            return <label htmlFor="floatingInput">{name}</label>
        }
    }
    
    return (
        <section className="d-flex justify-content-center py-5">
            <form onSubmit={handleSubmit} className="w-50 p-3 needs-validation" noValidate>
                <img
                    className="mb-4"
                    src="/images/sun.svg"
                    alt=""
                    width="72"
                    height="57"
                />
                <h1 className="h3 mb-3 fw-normal">Create account</h1>
                {
                    msgError?.message !== undefined && <div className="alert alert-danger" role="alert">{msgError.message}</div>
                }


                <div className="form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Jon"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                        required
                    />

                    {isFormValid("Name")}

                </div>

                <div className="form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Doe"
                        name="surname"
                        value={surname}
                        onChange={handleInputChange}
                        required
                    />
                    {
                        isFormValid('Surname')
                    }
                </div>

                <div className="form-floating">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        required
                    />
                    {
                        isFormValid('Email')
                    }
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        required
                    />
                    {
                        isFormValid('Password')
                    }
                </div>
                <div className="form-floating">
                    <select className="form-select" aria-label="Default select example" name="roleId" value={roleId} onChange={handleInputChange} required>
                        <option disabled>Select Role</option>
                        {
                            rols?.map((rol, index) =>
                                <option key={index} value={rol.id}>{rol.name}</option>
                            )
                        }
                    </select>
                </div>

                <div className="checkbox my-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                    Sign Up
                </button>
                <div className="d-flex mt-5 mb-3 justify-content-between">
                    <p className="text-muted">I already have an account</p>
                    <Link href="/signin" passHref>
                        <a className="link-primary">Sign in</a>
                    </Link>
                </div>
            </form>
        </section>
    );
};

export default FormSignup;
