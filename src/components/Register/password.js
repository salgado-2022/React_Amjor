function ValidationPass(values) {
    let error = {}
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9_-]{8,}$/

    if (values.password === "") {
        error.password = "La contraseña es obligatoria"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "Contraseña no es valida"
    } else {
        error.password = ""
    }

    return error;
}

export {ValidationPass}