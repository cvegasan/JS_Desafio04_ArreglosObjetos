const propiedades_alquiler = [
    {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    costo:  2000,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 3,
    costo:  2500,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    costo:  2200,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Departamento en Alquiler',
    src: './assets/img/01propalquiler.jpg',
    descripcion: 'Brisas Norte, Chicureo Norte, Linda Y Amplia Casa El Remanso De Chicureo',
    ubicacion: 'El Remanso De Chicureo 1 - 300, Colina, Chicureo, RM',
    habitaciones: 3,
    costo:  135000,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Departamento en Alquiler',
    src: './assets/img/02propalquiler.jpg',
    descripcion: 'Casa ubicada en la comuna de Villa Alemana, con una superficie total de 183.00 m².',
    ubicacion: 'El Rincón, Villa Alemana, Valparaíso',
    habitaciones: 2,
    costo:  120000,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Casa en Alquiler',
    src: './assets/img/03propalquiler.jpg',
    descripcion: 'OPORTUNIDAD !! Linda casa de estilo inglés, en excelente estado, ubicada en Chicureo Centro.',
    ubicacion: 'Chicureo Centro, Chicureo, Colina, RM',
    habitaciones: 4,
    costo:  155000,
    smoke: true,
    pets: false
    },
    {
    nombre: 'Departamento en Alquiler',
    src: './assets/img/04propalquiler.jpg',
    descripcion: 'Se encuentra ubicada en la comuna de San Bernardo, con una superficie total de 99.00 m².',
    ubicacion: 'Santa Ines, Nos, San Bernardo, RM',
    habitaciones: 1,
    costo:  100000,
    smoke: false,
    pets: true
    }
    ]
const elemento = document.querySelector('.row');
let html='';
    for(let propiedad of propiedades_alquiler) {
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
