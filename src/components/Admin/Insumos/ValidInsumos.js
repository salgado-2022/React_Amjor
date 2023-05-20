function ValidInsumos(values) {
    let error = {}
    const nombre_pattern = /^[^0-9<>%$"!#&/=]*$/
    const descripcion_pattern = /^[^<>%$!#&/]*$/
    const precio_pattern = /^[0-9]*$/

    if (values.NombreInsumo === "") {
        error.NombreInsumo = "El nombre es obligatorio"
    } else if (!nombre_pattern.test(values.NombreInsumo)) {
        error.NombreInsumo = "Porfavor ingrese un nombre válido"
    } else {
        error.NombreInsumo = ""
    }

    if (values.Descripcion === "") {
        error.Descripcion = "La descripción es obligatoria"
    } else if (!descripcion_pattern.test(values.Descripcion)) {
        error.Descripcion = "Porfavor ingrese una descripción válida"
    } else {
        error.Descripcion = ""
    }

    if (values.PrecioUnitario === "") {
        error.PrecioUnitario = "El precio es obligatorio"
    } else if (!precio_pattern.test(values.PrecioUnitario)) {
        error.PrecioUnitario = "Porfavor ingrese un precio válido"
    } else {
        error.PrecioUnitario = ""
    }
    return error;
}

export {ValidInsumos}