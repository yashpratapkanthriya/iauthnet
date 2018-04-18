import React, {Fragment} from 'react'
import Footer from './footer'
import NavBar from './header'

const Layout = ({children}) => (
    <Fragment>
        <main>
           <NavBar/>
            {children}
        </main>
        <Footer/>
    </Fragment>
)

export default Layout
