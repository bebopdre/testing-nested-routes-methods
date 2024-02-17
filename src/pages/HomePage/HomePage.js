import './HomePage.scss';

import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const getBooks = async () => {
            try {
                const response = await axios.get('http://localhost:5050/books');

                setBooks(response.data);
            }
            catch (err) {
                console.log(`failed to retrieve books. this was the error: ${err}`);
            }
        }
        getBooks();
    }, []);

    return (
        <main className="home">
            <h1 className="home__heading">
                PICK A BOOK
            </h1>
            <section className="home__books">
                <p>first</p>
                {
                    books.map(book => (
                        <NavLink key={book.id} to={`/first/${book.id}`} className="home__books-book">

                            <p className='home__books-book-title'>
                                {book.title}
                            </p>

                        </NavLink>
                    ))
                }
            </section>
            <section className="home__books">
                <p>second</p>
                {
                    books.map(book => (
                        <NavLink key={book.id} to={`/second`} state={{ book: book }} className="home__books-book">

                            <p className='home__books-book-title'>
                                {book.title}
                            </p>

                        </NavLink>
                    ))
                }
            </section>
            <section className="home__books">
                <p>third</p>
                {
                    books.map(book => (
                        <NavLink key={book.id} to={`/third/${book.id}`} state={{ book: book }} className="home__books-book">

                            <p className='home__books-book-title'>
                                {book.title}
                            </p>

                        </NavLink>
                    ))
                }
            </section>
        </main>
    )
}

export default HomePage;
