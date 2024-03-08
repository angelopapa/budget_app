/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import { AppContext } from '../context/AppContext';

export const Currency = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('Currency');
  
    const handleCurrencyChange = (currency) => {
      setSelectedCurrency(currency);
    };
  

  
  return (
    <div className="col-3 ">
      <div className="alert alert-secondary">
        <div class="btn-group">
          <button
            id="currency"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Currency ({selectedCurrency}) <i class="bi bi-caret-down-fill me-2"></i>
          </button>

          <ul class="dropdown-menu">
            <li>
            <button className="dropdown-item" onClick={() => handleCurrencyChange('$ Dollar')}>
              $ Dollar
            </button>
            </li>
            <li>
            <button className="dropdown-item" onClick={() => handleCurrencyChange('£ Pound')}>
              £ Pound
            </button>
            </li>
            <li>
            <button className="dropdown-item" onClick={() => handleCurrencyChange('€ Euro')}>
              € Euro
            </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};




