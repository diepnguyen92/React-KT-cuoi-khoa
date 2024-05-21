import React from 'react'
import Header from '../component/Header'
import Menu from '../component/Menu'
import Advantage from '../component/Advantage'
import Footer from '../component/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header />
    <Menu />
    <Outlet />
    <Advantage />
    <Footer />

    </>
  )
}

export default Layout