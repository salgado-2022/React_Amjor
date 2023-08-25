import React, { createContext, useState, useContext } from 'react';


export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formValues, setFormValues] = useState({});
    const [checkoutUrl, setCheckoutUrl] = useState({});
    //console.log(checkoutUrl);

    return (
        <FormContext.Provider value={{ formValues, setFormValues, checkoutUrl, setCheckoutUrl }}>
            {children}
        </FormContext.Provider>
    );
}; 

export function useFormContext() {
    return useContext(FormContext);
}