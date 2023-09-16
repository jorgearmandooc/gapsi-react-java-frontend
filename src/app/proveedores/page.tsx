import Image from 'next/image'
import Link from 'next/link'

export default function Proveedores() {
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

    <main>
      <div className="container pt-4">
        <section className="mb-4">
          <div className="card">
            <div className="card-header py-3">
              <h5 className="mb-0 text-center"><strong>E-Commerce GAPSI</strong></h5>
            </div>
            <div className="card-body">

                <div className="text-center">
                  <Image
                  src="/logo.png"
                  height="200"
                  width="200"
                  alt=""
                  loading="lazy"
                  className="img-thumbnail"
                  />
                </div>
                <h2 className="text-center">Bienvenido Candidato 1</h2>
                <p className="text-center">Versión: 0.0.1</p>

            </div>
          </div>
        </section>
      </div>
    </main>
  </>)
}
