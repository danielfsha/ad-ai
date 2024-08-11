"use client";

import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useForm = () => {
  return useContext(FormContext);
};

const FormProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    name: "",
    description: "",
    selectedNiches: [],
    filteredItems: [],
    searchInput: "",
    file: null,
    status: null,
    error: null,
  });

  const handleInputChange = (field, value) => {
    setState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <FormContext.Provider value={{ state, handleInputChange }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
