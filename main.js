class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre=nombre,
        this.apellido=apellido,
        this.libros=libros,
        this.mascotas=mascotas
    }
        getFullName() {
            console.log(`El nombre completo de usuario es ${this.nombre} ${this.apellido}`)
            
            }

        addMascota(mascota) {
            this.mascotas.push(mascota)
        }

        countMascotas() {
            totalMascotas = this.mascotas.length
            return (
                console.log(`La cantidad de mascotas es: ${totalMascotas}`)
            ) 
        }

        addBook (nombre,autor) {
            this.libros.push({nombre,autor})
        }

        getBookNames () {
            listaLibros = [...this.libros]
            return (
                console.log(listaLibros[0])
            )

        }

}

const usuario1 =  new Usuario ("Leandro", "Danko", [{nombre:"Cien años de Soledad",autor:"Gabriel García Marquez"}], ["Panchita"])

console.log(usuario1)

getFullName(usuario1);

addMascota("Omicron");

countMascotass(usuario1);

addBook ("Historias de cronopios y de famas","Julio Cortázar")

getBookNames (usuario1)








