function ValidInsumos(values) {
    let error = {}
    const nombre_pattern = /^[^0-9<>%$"!#&/=]*$/
    const descripcion_pattern = /^[^<>%$!#&/]*$/
    const precio_pattern = /^[0-9]*$/

    if (values.nombreInsumo === "") {
        error.nombreInsumo = "El nombre es obligatorio"
    } else if (!nombre_pattern.test(values.nombreInsumo)) {
        error.nombreInsumo = "Porfavor ingrese un nombre válido"
    } else {
        error.nombreInsumo = ""
    }

    if (values.descInsumo === "") {
        error.descInsumo = "La descripción es obligatoria"
    } else if (!descripcion_pattern.test(values.descInsumo)) {
        error.descInsumo = "Porfavor ingrese una descripción válida"
    } else {
        error.descInsumo = ""
    }

    if (values.precioInsumo === "") {
        error.precioInsumo = "El precio es obligatorio"
    } else if (!precio_pattern.test(values.precioInsumo)) {
        error.precioInsumo = "Porfavor ingrese un precio válido"
    } else {
        error.precioInsumo = ""
    }
    return error;
}

export {ValidInsumos}