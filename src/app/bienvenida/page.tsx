import Image from 'next/image'
import Link from 'next/link'
import HeaderNavComponent from '@/components/header';

async function getData() {
  const res = await fetch('http://127.0.0.1:8080/bienvenida', { cache: 'no-store' });
  return res.json();
};

export default async function Page() {

  const data = await getData();

  /* if(error){
    return 'Problema al cargar los datos de bienvenida.';
  }
  */
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
                  src={data.img}
                  height="200"
                  width="200"
                  alt=""
                  loading="lazy"
                  className="img-thumbnail"
                  />
                </div>
                <h2 className="text-center"> {data.bienvenida}</h2>
                <p className="text-center">Versión: {data.version}</p>

            </div>
          </div>
        </section>
      </div>
    </main>
  </>)
}