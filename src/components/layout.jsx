import React from 'react'
import CanvasCart from './sections/cart/canvas.cart'
import Footer from './sections/footer.section'
import Header from './sections/header.section'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className='container'>{children}</main>
            <CanvasCart />
            <Footer />
        </>
    )
}

export default Layout