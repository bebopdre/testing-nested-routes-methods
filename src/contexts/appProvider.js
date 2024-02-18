import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [venues, setVenues] = useState([]);
    const [events, setEvents] = useState([]);
    const [users, setUsers] = useState([]);

    // Add axios calls to fetch venues, events, and users here

    return (
        <AppContext.Provider
            value={{ venues, setVenues, events, setEvents, users, setUsers }}
        >
            {children}
        </AppContext.Provider>
    );
};
