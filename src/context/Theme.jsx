import { createContext, useState } from "react"

export const ThemeContext = createContext();


export default function Theme({ children }) {

    let [theme, setTheme] = useState("light");

    let handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{ theme, handleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
