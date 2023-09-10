import React, { useContext } from "react";
import { useFilters } from "../../hooks/useFilters";

function Filtro2() {

  const { filters, setFilters } = useFilters()

  const handleOrderByChange = (orderBy) => {
    setFilters((prevState) => ({
      ...prevState,
      orderBy
    }));
  };

  return (
    <>
    <div className="row">
        <div className="col-md-12 mb-5">
            <div className="float-md-left mb-4">
                <h2 className="text-black h5">Mira nuestros productos!</h2>
            </div>
            <div className="d-flex">
                <div className="dropdown mr-1 ml-md-auto">
                    <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {filters.orderBy === "alfabetico" ? "Orden alfabético" : filters.orderBy === "antiguo" ? "Más antiguo" : "Lo más reciente"}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                        <a className="dropdown-item" href="#/" onClick={() => handleOrderByChange("alfabetico")}>Orden alfabético</a>
                        <a className="dropdown-item" href="#/" onClick={() => handleOrderByChange("antiguo")}>Más antiguo</a>
                        <a className="dropdown-item" href="#/" onClick={() => handleOrderByChange("reciente")}>Lo más reciente</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export { Filtro2 };
