
const propiedades_ventas = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    costo:  5000,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con agradables vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    costo:  1200,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    costo:  4500,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Departamento en Venta Nomad Bellet',
    src: './assets/img/01propventa.jpg',
    descripcion: 'Este apartamento se encuentra ubicado a pasos del Metro Pedro de Valdivia',
    ubicacion: 'Antonio Bellet 126, Providencia, Chile, RM',
    habitaciones: 3,
    costo:  135000000,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Departamento en Venta Neourbe Inmobiliaria',
    src: './assets/img/02propventa.jpg',
    descripcion: 'Este apartamento se encuentra ubicado a pasos del Metro Los Leones',
    ubicacion: 'Suecia 440, Los Leones, Providencia, RM',
    habitaciones: 2,
    costo:  120000000,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Departamento en Venta Nomad Living',
    src: './assets/img/03propventa.jpg',
    descripcion: 'Este apartamento se encuentra ubicado a pasos del Metro Los Leones',
    ubicacion: 'Bucarest 50, Los Leones, Providencia, RM',
    habitaciones: 4,
    costo:  155000000,
    smoke: true,
    pets: false
    },
    {
    nombre: 'Departamento en Venta Inmobiliaria Sinergía',
    src: './assets/img/04propventa.jpg',
    descripcion: 'Este apartamento se encuentra ubicado a pasos del Metro Salvador',
    ubicacion: 'Ricardo Matte Pérez N°431, Salvador, Providencia, RM',
    habitaciones: 1,
    costo:  150000000,
    smoke: false,
    pets: true
    }
    ]
const elemento = document.querySelector('.row');
let html='';
    for(let propiedad of propiedades_ventas) {
        html+=
        `<div class="col-md-3 mb-3">
            <div class="card">
              <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="foto de departamento con jardin"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedad.habitaciones} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${new Intl.NumberFormat('es-CL').format(propiedad.costo)}</p>
                <p class="${(propiedad.smoke) ? 'text-success' : 'text-danger'}">
                  <i class="${(propiedad.smoke) ? 'fas fa-smoking':'fas fa-smoking-ban'}"></i> ${(propiedad.smoke) ? 'Permitido fumar':'No se permite fumar'}
                </p>
                <p class="${(propiedad.pets) ? 'text-success':'text-danger'}">
                  <i class="${(propiedad.pets) ? 'fas fa-paw':'fa-solid fa-ban'}"></i> ${(propiedad.pets) ? 'Mascotas Permitidas':'No se permiten mascotas'}
                </p>
              </div>
            </div>
          </div>`
    }
    elemento.innerHTML=html;
