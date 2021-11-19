export default class Usuario {
  constructor(nombre, apellido, correo, activo) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.correo = correo),
      (this.activo = activo);
  }

  presentarse() {
    return `Hola soy ${this.nombre} y mi correo es ${this.correo}`;
  }

  getNombre() {
    return this.nombre;
  }

  getApellidos() {
    return this.apellido;
  }

  setApellidos(nuevoApellido) {
    return (this.apellido = nuevoApellido);
  }
}
