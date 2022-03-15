import Layout from '@components/layout'
import AdminContent from '@components/sections/admin-content.section'
import React from 'react'
import withAuthAdmin from 'src/protected/withAuthAdmin'

const Admin = () => {
  return (
    <Layout>
      <AdminContent />
    </Layout>
  )
}

export default withAuthAdmin(Admin);