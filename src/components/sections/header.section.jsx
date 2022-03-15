/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Link from "next/link";
import { BsBag } from "react-icons/bs";
import { useSelector } from "react-redux"

const Header = () => {

    const { user } = useSelector(state => state.auth)

    return (
        <header className="container d-flex flex-wrap justify-content-center py-4 mb-4 border-bottom">
            <a
                href="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <svg className="bi me-2" width="40" height="32">
                    <use xlinkHref="#bootstrap"></use>
                </svg>
                <span className="fs-4">Diego Store</span>
            </a>

            <ul className="nav nav-pills">
                <li className="nav-item pt-1">
                    <Link href="/">
                        <a className="nav-link" aria-current="page">
                            Store
                        </a>
                    </Link>
                </li>

                <li className="nav-item pt-1">
                    {
                        user !== null ? <Link href={user?.roleId === 1 ? '/admin' : 'client'}>
                            <a className="nav-link" aria-current="page">
                                Hello {user.name}
                            </a>
                        </Link> : <Link href="/signin">
                            <a className="nav-link" aria-current="page">
                                Sign In
                            </a>
                        </Link>
                    }

                </li>
                <li className="nav-item">
                    <span
                        role="button"
                        className="nav-link"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight">
                        <BsBag size="18" />
                    </span>
                </li>
            </ul>
        </header>
    )
}

export default Header