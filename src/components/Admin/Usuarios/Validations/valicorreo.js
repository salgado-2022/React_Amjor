function valicorreo(values) {
    let error = {};
    const correo_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (values.correo === "") {
      error.correo = "El correo es obligatorio";
    } else if (!correo_pattern.test(values.correo)) {
      error.correo = "Por favor ingrese un correo válido";
    } else {
      error.correo = "";
    }
  
    return error;
  }
  
  export { valicorreo };
  