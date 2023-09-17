'use client';

import HeaderNavComponent from '@/components/header';
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default async function Page() {

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    await fetch(`http://localhost:8080/proveedores`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      if(response.status == 201){
        router.replace("/proveedores");
      }
      return Promise.reject(response);
    }).catch((error) => {
      if(error.status == 400) {
        alert("El proveedor ya existe.");
      }
    });

  }

  return (<>
    <HeaderNavComponent></HeaderNavComponent>

    <main>
      <div className="container pt-4">
        <section className="mb-4">
          <div className="card">
            <div className="card-header py-3">
              <h5 className="mb-0 text-center"><strong>Proveedores Crear Nuevo</strong></h5>
            </div>
            <div className="card-body">

              <form onSubmit={handleSubmit}>

                <div className="mb-4">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" name="nombre"/>
                </div>

                <div className="mb-4">
                <label className="form-label">Razón Social</label>
                <input type="text" className="form-control" name="razonSocial"/>
                </div>

                <div className="mb-4">
                <label className="form-label">Dirección</label>
                <input type="text" className="form-control" name="direccion" />
                </div>

                <div className="mb-4">
                  <button className="btn btn-success" type="submit"><i className="fa fa-plus" aria-hidden="true"></i> Guardar</button>
                </div>

              </form>

            </div>
          </div>
        </section>
      </div>
    </main>
  </>)
}