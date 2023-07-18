import React, { useState, useRef } from "react";
import { Form, Button, Container, Row, Col, Dropdown } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";

function ConfiFormulario() {
  const [rol, setRol] = useState("");
  const [permisos, setPermisos] = useState([]);
  const dropdownRef = useRef(null);

  const validarRolPermiso = () => {
    const rolRegex = /^[A-Za-z]+$/;

    if (rol.trim() === "") {
      Swal.fire({
        title: "Validación fallida",
        text: "Debes ingresar un rol.",
        icon: "error",
      });
    } else if (!rol.match(rolRegex)) {
      Swal.fire({
        title: "Creación del rol y el permiso fallida",
        text: "El rol debe contener solo letras",
        icon: "error",
      });
    } else if (permisos.length === 0) {
      Swal.fire({
        title: "Validación fallida",
        text: "Debes seleccionar al menos 1 permiso.",
        icon: "error",
      });
    } else {
      axios
        .post("http://localhost:4000/api/crearRol", { rol })
        .then((res) => {
          if (res.data.Status === "Success") {
            Swal.fire({
              title: "Creado Correctamente",
              text: "El Rol se ha creado correctamente",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
            setTimeout(function () {
              window.location = "configuracion";
            }, 670);
          } else {
            Swal.fire({
              title: "Error!",
              text: "Hubo un problema al crear el rol.",
              icon: "error",
              confirmButtonText: "OK",
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleSelectPermission = (permission) => {
    const selectedPermissions = [...permisos];

    if (selectedPermissions.includes(permission)) {
      // Remove the permission if already selected
      const index = selectedPermissions.indexOf(permission);
      selectedPermissions.splice(index, 1);
    } else {
      // Add the permission if not selected
      selectedPermissions.push(permission);
    }

    setPermisos(selectedPermissions);
  };

  const toggleDropdown = () => {
    const dropdownNode = dropdownRef.current;

    if (dropdownNode) {
      dropdownNode.focus();
      dropdownNode.click();
    }
  };

  return (
    <Container>
      <h2 className="mt-5 mb-4">CREAR UN NUEVO ROL Y PERMISOS</h2>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="formRol">
            <Form.Label>Nuevo rol</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.j Administrador"
              required
              value={rol}
              onChange={(e) => setRol(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formPermisos">
            <Form.Label>Permisos asociados</Form.Label>
            <div className="permissions-dropdown">
              <Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-permisos" ref={dropdownRef}>
                  Seleccione los permisos
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div onClick={toggleDropdown}>
                    {["Ventas", "Usuarios", "Permiso 3"].map((permiso) => (
                      <Dropdown.Item
                        key={permiso}
                        onClick={() => handleSelectPermission(permiso)}
                      >
                        <Form.Check
                          type="checkbox"
                          id={permiso}
                          label={permiso}
                          checked={permisos.includes(permiso)}
                          onChange={() => {}}
                        />
                      </Dropdown.Item>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" className="mb btn-lg" onClick={validarRolPermiso}>
        Crear el nuevo rol y permiso
      </Button>
    </Container>
  );
}

export { ConfiFormulario };
