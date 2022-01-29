import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Main from '../Main/Main'

export default function Dashboard() {
    return (
        <React.Fragment>
            <Header/>
            <Main/>
            <Sidebar/>
        </React.Fragment>
    )
}
