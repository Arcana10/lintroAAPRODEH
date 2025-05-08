import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {

    const [ modal, setModal ] = useState(false);

    const toogleModal = () => setModal(!modal);

    const contextValue = {
        modal,
        toogleModal
    }

    return (
        <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
    )

}

export const useUI = () => useContext(UIContext);