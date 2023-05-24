function validocumentoIdenti(values) {
    let error = {};
    const documentoIdenti_pattern = /^[0-9]+$/;
  
    if (values.documentoIdenti === "") {
      error.documentoIdenti = "El documento de identidad es obligatorio";
    } else if (!documentoIdenti_pattern.test(values.documentoIdenti)) {
      error.documentoIdenti = "Por favor ingrese un número válido";
    } else if (values.documentoIdenti.length > 10) {
      error.documentoIdenti = "El documento de identidad debe tener máximo 10 dígitos";
      values.documentoIdenti = values.documentoIdenti.substring(0, 10);
    } else {
      error.documentoIdenti = "";
    }
  
    return error;
  }
  
  export { validocumentoIdenti };