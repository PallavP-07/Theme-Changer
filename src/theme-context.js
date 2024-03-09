const { createContext, useContext, useState, useEffect } = require("react");
const themeContext = createContext();
export const useTheme = () => {
  return useContext(themeContext);
};
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const theme = isDark ? "dark" : "light";

  const toggleTheme = () => {
    setIsDark((prevState) => !prevState);
  };


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDark]);
  
  return (
    <themeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </themeContext.Provider>
  );
};
