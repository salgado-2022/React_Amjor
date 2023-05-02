function Validation(values) {
    let error = {}
    const email_pattern = /^[a-zA-Z0-9_-]+@[^\s@]+\.[^\s@]+$/

    if (values.email === "") {
        error.email = "El correo es obligatorio"
    } else if (!email_pattern.test(values.email)) {
        error.email = "Correo no valido"
    } else {
        error.email = ""
    }
    return error;
}

export {Validation}