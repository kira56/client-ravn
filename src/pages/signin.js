import Layout from '@components/layout'
import FormSignin from '@components/sections/form-signin.section'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from "react-redux"

const Signin = () => {

    const router = useRouter();

    const { isAuthenticated, user } = useSelector((state) => state.auth);

    if (isAuthenticated && user?.roleId === 2) {
        router.push('/client')
        return <></>
    } else if (isAuthenticated && user?.roleId === 1) {
        router.push('/admin')
        return <></>
    } else {
        return (
            <Layout>
                <FormSignin />
            </Layout>
        )
    }
}

export default Signin