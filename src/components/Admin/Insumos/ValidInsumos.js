function ValidInsumos(values) {
    let error = {}
    const nombre_pattern = /^[^<>%$"!#&/=]*$/

    if (values.nombreInsumo === "") {
        error.nombreInsumo = "El nombre es obligatorio"
    } else if (!nombre_pattern.test(values.nombreInsumo)) {
        error.nombreInsumo = "El nombre no es válido"
    } else {
        error.nombreInsumo = ""
    }
    return error;
}

export {ValidInsumos}