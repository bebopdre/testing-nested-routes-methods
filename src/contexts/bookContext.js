import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// Step 1: Create the context
// This creates a React context object. Contexts allow you to share data across your component tree without having to pass props down manually at every level.
const BookContext = createContext();

// Step 2: Create a custom hook for using our context
// This custom hook simplifies the process of accessing our context's value in any component. By using this hook, components can easily access and subscribe to the context's data.
export const useBook = () => useContext(BookContext);

// Step 3: Provider component
// The provider component is responsible for encapsulating parts of our app where we want the context's data to be accessible. It also holds the state and logic for fetching and updating the current book data.
export const BookProvider = ({ children }) => {
    //Set state variables here for this specific contexted data
    const [curBook, setCurBook] = useState({});
    const [bookID, setBookID] = useState(null);

    useEffect(() => {
        if (bookID) {
            // Only make the axios call if bookID is not null
            const getBook = async () => {
                try {
                    const response = await axios.get(
                        `http://localhost:5050/books/${bookID}`
                    );
                    setCurBook(response.data);
                } catch (err) {
                    console.error(`Error fetching book: ${err}`);
                }
            };
            getBook();
        }
    }, [bookID]);

    // The provider component returns the BookContext.Provider component
    // This component wraps the children components, making the context's value (curBook and setBookID) accessible to any descendants that use the useBook hook.
    return (
        <BookContext.Provider value={{ curBook, setBookID }}>
            {children}{" "}
            {/* Render children components passed into BookProvider */}
        </BookContext.Provider>
    );
};
