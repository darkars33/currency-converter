import { createContext, useState } from "react";

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [fromCurrency, setFromCurrency] = useState("🇮🇳 INR - India");
  const [toCurrency, setToCurrency] = useState("🇦🇸 USD - American Samoa");
  const [firstCurrency, setFirstCurrency]= useState(0);

  const value = {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstCurrency, 
    setFirstCurrency
  };
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
