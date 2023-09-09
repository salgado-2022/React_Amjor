import { React, useId } from "react";
//import { ProductosCatalogo } from "../Catalogo/Catalogo";
import { useFilters } from "../../hooks/useFilters";

function Filtro() {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  return (
    <div className="col-md-3 order-1 mb-5 mb-md-0">
      <div className="border p-4 rounded mb-4">
        <div className="mb-4">
          <h3 className="mb-3 h6 text-uppercase text-black d-block">
            Filtrar por precio
          </h3>
          <div>
            <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
            <input
              type="range"
              id={minPriceFilterId}
              min="0"
              max="500000"
              onChange={handleChangeMinPrice}
              value={filters.minPrice}
            />
            <span>${filters.minPrice}</span>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-3 h6 text-uppercase text-black d-block">Motivos</h3>
          <a href="#/" className="d-flex color-item align-items-center">
            <span className="bg-primary color d-inline-block rounded-circle mr-2"></span>{" "}
            <span className="text-black">Cumpleaños </span>
          </a>
          <a href="#/" className="d-flex color-item align-items-center">
            <span className="bg-primary color d-inline-block rounded-circle mr-2"></span>{" "}
            <span className="text-black">Bodas</span>
          </a>
          <a href="#/" className="d-flex color-item align-items-center">
            <span className="bg-primary color d-inline-block rounded-circle mr-2"></span>{" "}
            <span className="text-black">Grados </span>
          </a>
          <a href="#/" className="d-flex color-item align-items-center">
            <span className="bg-primary color d-inline-block rounded-circle mr-2"></span>{" "}
            <span className="text-black">Halloween </span>
          </a>
          <a href="#/" className="d-flex color-item align-items-center">
            <span className="bg-primary color d-inline-block rounded-circle mr-2"></span>{" "}
            <span className="text-black">Navidad </span>
          </a>
          <a href="#/" className="d-flex color-item align-items-center">
            <span className="bg-primary color d-inline-block rounded-circle mr-2"></span>{" "}
            <span className="text-black">Desayunos </span>
          </a>
          <a href="#/" className="d-flex color-item align-items-center">
            <span className="bg-primary color d-inline-block rounded-circle mr-2"></span>{" "}
            <span className="text-black">Bandejas </span>
          </a>
          <a href="#/" className="d-flex color-item align-items-center">
            <span className="bg-primary color d-inline-block rounded-circle mr-2"></span>{" "}
            <span className="text-black">Amor y amistad </span>
          </a>
          <a href="#/" className="d-flex color-item align-items-center">
            <span className="bg-primary color d-inline-block rounded-circle mr-2"></span>{" "}
            <span className="text-black">Otras</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export { Filtro };
