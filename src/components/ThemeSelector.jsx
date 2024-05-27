import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeSelector = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <select className="but mb-3" value={theme} onChange={handleChange}>
      <option value="system">System Preference</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
};

export default ThemeSelector;
