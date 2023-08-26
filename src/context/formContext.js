import React, { createContext, useState, useContext } from 'react';


export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formValues, setFormValues] = useState({});
    const [checkoutUrl, setCheckoutUrl] = useState({});
    const [errors, setErrors] = useState({});

    console.log(errors)
    //console.log(checkoutUrl);

    return (
        <FormContext.Provider value={{ formValues, setFormValues, checkoutUrl, setCheckoutUrl, errors, setErrors }}>
            {children}
        </FormContext.Provider>
    );
}; 

export function useFormContext() {
    return useContext(FormContext);
}