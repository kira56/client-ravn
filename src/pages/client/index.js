import Layout from '@components/layout'
import ClientContent from '@components/sections/client-content.section'
import React from 'react'
import withAuthClient from 'src/protected/withAuthClient'

const Client = () => {
    return (
        <Layout>
            <ClientContent />
        </Layout>
    )
}

export default withAuthClient(Client);