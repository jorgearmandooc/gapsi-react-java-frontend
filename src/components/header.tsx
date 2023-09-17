import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeaderNavComponent() {
    return (<>
    <header>
        <nav
            id="sidebarMenu"
            className="collapse d-lg-block sidebar collapse bg-white"
            >
        <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
            <Link href="/"className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-dashboard fa-fw me-3"></i><span>Bienvenida</span></Link>
            <Link href="/proveedores"className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-users fa-fw me-3"></i><span>Proveedores</span></Link>
            </div>
        </div>
        </nav>
        
        <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">
            <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
            <i className="fas fa-bars"></i>
            </button>

            <a className="navbar-brand" href="#">
            <Image
                src="/logo.png"
                height="40"
                width="100"
                alt=""
                loading="lazy"
                />
            </a>

        </div>
        </nav>
    </header>
    </>
    )
}