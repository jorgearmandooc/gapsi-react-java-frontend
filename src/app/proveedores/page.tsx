import Image from 'next/image'
import HeaderNavComponent from '@/components/header';

export default function Proveedores() {
  return (<>
    <HeaderNavComponent></HeaderNavComponent>

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
