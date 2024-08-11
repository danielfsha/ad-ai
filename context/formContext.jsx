"use client";

import { createContext, useContext, useState } from "react";

import { NICHES } from "@/utils/constants";

const FormContext = createContext();

export const useForm = () => {
  return useContext(FormContext);
};

const FormProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    niches: NICHES,
    name: "",
    description: "",
    selectedNiches: [],
    filteredItems: [],
    searchInput: "",
    file: null,
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
