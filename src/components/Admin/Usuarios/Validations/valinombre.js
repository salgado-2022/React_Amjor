function valinombre (values) {
    let error = {}
    const nombre_pattern = /^[^<>%$!#&/]*$/

    if (values.nombre === "") {
        error.nombre = "El nombre es Obligatorio"
    } else if (!nombre_pattern.test(values.nombre)) {
        error.nombre = "Porfavor ingrese el nombre completo"
    } else {
        error.nombre = ""
    }
    return error
}

export {valinombre}