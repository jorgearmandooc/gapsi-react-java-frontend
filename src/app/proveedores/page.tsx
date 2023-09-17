'use client';

import Image from 'next/image'
import HeaderNavComponent from '@/components/header';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect} from 'react';

import DataTable from 'datatables.net-dt';

export default function Proveedores() {
  
  function deleteProveedor(table:any, idProveedor: string) {
    fetch(`http://localhost:8080/proveedores/${idProveedor}`, {
      method: "DELETE"
    })
    .then(() => {
      table.ajax.reload();
    });
  }

  useEffect(() => {
    let table = new DataTable('#dataTable', {
      ajax: 'http://127.0.0.1:8080/proveedores',
      processing: true,
      serverSide: true,
      order:[[1,"asc"]],
      ordering: false,
      searching: false,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json',
      },
      columns:[
        {
          title: "ID",
          data: 'idProveedor'
        },
        {
          title: "NOMBRE",
          data: 'nombre'
        },
        {
          title: "RAZÓN SOCIAL",
          data: 'razonSocial'
        },
        {
          title: "DIRECCIÓN",
          data: 'direccion'
        },
        {
          data: null,
          render: (data:any, type:any, row:any, settings: any) => { //data, type, row 
            let html = '';
            html += '<button class="btn btn-danger btn-datatable mr-2" data-idProveedor="' + data.idProveedor +'"><i class="fa fa-times" aria-hidden="true"></i></button>';
            return html;
          }
        }
      ],
      drawCallback: function(e:any) {
        let btnsDatatable = table.$(".btn-datatable").each( function(index: number, btn: any){
          btn.addEventListener('click', () => {
            deleteProveedor(table, table.$(btn).data('idproveedor'));
          } );
        });
      }
    });
  })
  
  return (<>
    <Head>
    <link href="cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css" rel="stylesheet"/>
    </Head>

    <HeaderNavComponent></HeaderNavComponent>
  
    <main>
      <div className="container pt-4">
        <section className="mb-4">
          <div className="card">
            <div className="card-header py-3">
              <h5 className="mb-0 text-center"><strong>Proveedores</strong></h5>
            </div>
            <div className="card-body">

              <Link href="/proveedores/create" className="btn float-end btn-primary mr-2 mb-4"><i className="fa fa-plus" aria-hidden="true"></i> Crear Proveedor</Link>

              <table id="dataTable" className="table datatable"></table>

            </div>
          </div>
        </section>
      </div>
    </main>
  </>)
}
