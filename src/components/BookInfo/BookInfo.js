import { useLocation } from "react-router-dom";

function BookInfo() {
    const location = useLocation();

    // const book = location.state.book;
    console.log('hello from book info: ', location);

    return (
        <>
            hi, i'm andrea
        </>
    )
}

export default BookInfo;
