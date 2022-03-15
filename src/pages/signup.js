import React from 'react'
import Layout from '@components/layout'
import FormSignup from '@components/sections/form-signup.section'
import { useRouter } from 'next/router'
import { useSelector } from "react-redux"

const Signup = () => {

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
        <FormSignup />
      </Layout>
    )
  }
}

export default Signup