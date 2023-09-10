const arregloOriginal = [
    {
      "aseguradora": "AFIRME",
      "cotizacion": {
        "cliente": {
          "tipoPersona": "fisica",
          "nombre": "prueba",
          "apellidoPat": "prueba",
          "apellidoMat": "prueba",
          "rfc": "",
          "fechaNacimiento": "01-01-2005",
          "ocupacion": "",
          "curp": "",
          "direccion": {
            "calle": "oriente 945",
            "noExt": "410",
            "noInt": "021",
            "colonia": "prueba",
            "codPostal": "56618",
            "poblacion": "mexico",
            "ciudad": "cdmx",
            "pais": "mexico"
          },
          "edad": "18",
          "genero": "MASCULINO",
          "telefono": "",
          "email": ""
        }
      }
    }
  ];
  
  // Clonar el arreglo original
  const nuevoArreglo = JSON.parse(JSON.stringify(arregloOriginal));
  
  // Modificar al menos 5 datos en el nuevo arreglo
  nuevoArreglo[0].cotizacion.cliente.nombre = "Mario";
  nuevoArreglo[0].cotizacion.cliente.apellidoPat = "López";
  nuevoArreglo[0].cotizacion.cliente.apellidoMat = "Pérez";
  nuevoArreglo[0].cotizacion.cliente.rfc = "MTPRZ123";
  nuevoArreglo[0].cotizacion.cliente.fechaNacimiento = "05-02-2000";
  
  // Exportar el arreglo original y el nuevo arreglo
  export { arregloOriginal, nuevoArreglo };
  