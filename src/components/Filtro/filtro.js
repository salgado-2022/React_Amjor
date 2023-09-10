import { React, useId } from "react";
import { useFilters } from "../../hooks/useFilters";
import {Radio, RadioGroup, FormControlLabel, FormControl} from '@mui/material';

function Filtro() {
  const { filters, setFilters } = useFilters()

  const mediumSlateBlue = "#7B68EE";
  const msbSelected = "#705FD8";

  const minPriceFilterId = useId()

  const handleChangeMinPrice = (event) => {
    const newMinPrice = parseFloat(event.target.value);
    if (!isNaN(newMinPrice)) {
      setFilters(prevState => ({
        ...prevState,
        minPrice: newMinPrice
      }));
    }
  }

  const handleChangeMotivo = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      motivo: event.target.value
    }));
  };

  const motivoOptions = [
    { value: "", label: "Todos" },
    { value: "cumple", label: "Cumpleaños" },
    { value: "amor", label: "Amor y Amistad" },
    { value: "grado", label: "Grados" },
    { value: "halloween", label: "Halloween" },
    { value: "navidad", label: "Navidad" }
  ];

  const formattedMinPrice = filters.minPrice.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  });
  
  return (
    <div className="col-md-3 order-1 mb-5 mb-md-0">
      <div className="border p-4 rounded mb-4">
        <div className="mb-4">
          <h3 className="mb-3 text-black d-block" style={{ fontSize: "18px" }}>Filtrar por precio</h3>
          <div>
            <label htmlFor={minPriceFilterId}>Precio a partir de: </label>
            <input
              type="range"
              id={minPriceFilterId}
              min="0"
              max="500000"
              onChange={handleChangeMinPrice}
              value={filters.minPrice}
              style={{ backgroundColor: mediumSlateBlue }}
            />
            <span>{formattedMinPrice}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <FormControl component="fieldset">
            <h3 className="mb-3 text-black d-block" style={{ fontSize: "18px" }}>Motivos</h3>
            <RadioGroup aria-label="motivo" name="motivo" value={filters.motivo} onChange={handleChangeMotivo}>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {motivoOptions.map((option) => (
                  <li key={option.value} style={{ marginBottom: "-13px" }}>
                    <FormControlLabel
                      value={option.value}
                      control={<Radio sx={{ color: mediumSlateBlue, '&.Mui-checked': { color: msbSelected }, '& .MuiSvgIcon-root': { fontSize: 22 }}}/>}
                      label={<span style={{ fontSize: "14px" }}>{option.label}</span>}
                    />
                  </li>
                ))}
              </ul>
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export { Filtro };
