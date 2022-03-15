import React from "react";
import Link from "next/link";
import { useForm } from "@hooks/useform";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "src/actions/auth.action";

const FormSignin = () => {
    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        name: "",
        surname: "",
    });

    const { email, password } = formValues

    const { msgError } = useSelector(state => state.ui)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signin(formValues))
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
            <form onSubmit={handleSubmit} className="w-50 p-3">
                <img
                    className="mb-4"
                    src="/images/sun.svg"
                    alt=""
                    width="72"
                    height="57"
                />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                {
                    msgError?.message !== undefined && <div className="alert alert-danger" role="alert">{msgError.message}</div>
                }

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

                <div className="checkbox my-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                    Sign in
                </button>
                <div className="d-flex mt-5 mb-3 justify-content-between">
                    <p className="text-muted">Dont have an account?</p>
                    <Link href="/signup" passHref>
                        <a className="link-primary">Sign up</a>
                    </Link>
                </div>
            </form>
        </section>
    );
};

export default FormSignin;
