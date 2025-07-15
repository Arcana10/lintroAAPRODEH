import { createContext, useContext, useState } from "react";

const DBContext = createContext();

export const DBProvider = ({ children }) => {

    const [ info, setInfo ] = useState(null)

    const savedInfo = (data) => setInfo(data)

    const contextValue = {
        info,
        savedInfo
    }

    return (
        <DBContext.Provider value={contextValue}>{children}</DBContext.Provider>
    )

}

export const useDB = () => useContext(DBContext)