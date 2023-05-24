function valcontraseña(values) {
    let error = {}
    const contraseña_pattern = /^[^<>%$"!#&/=]*$/

    if (values.contraseña === "") {
        error.contraseña = "la contraseña es obligatorio"
    } else if (!contraseña_pattern.test(values.contraseña)) {
        error.contraseña = "Porfavor ingrese una contraseña válido"
    } else {
        error.contraseña = ""
    }
    return error
}

export {valcontraseña}