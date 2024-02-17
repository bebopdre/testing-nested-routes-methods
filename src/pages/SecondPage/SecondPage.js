import { useLocation } from "react-router-dom";

function SecondPage() {
    const location = useLocation();

    console.log('hello from the second page: ', location)
    return (
        <>
        </>
    )
}

export default SecondPage;
