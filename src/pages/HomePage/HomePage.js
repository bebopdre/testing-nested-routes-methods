import './HomePage.scss';

function HomePage() {
    const books = [
        {
            id: 1,
            title: 'The Martian',
            author: 'Andy Weir',
            description: 'A man gets left behind by his crew on mars. Will the scientists on earth risk everything to bring him home?',
            pageNum: 416,
            isMovie: true
        },
        {
            id: 2,
            title: 'Project Hail Mary',
            author: 'Andy Weir',
            description: 'The sun is failing, aliens are real and Ryland is stuck on a ship in the middle of another solar system. What happens next?',
            pageNum: 496,
            isMovie: false
        },
        {
            id: 3,
            title: 'All Good People Here',
            author: 'Ashley Flowers',
            description: 'In a small town in Indiana, everyone knows everyones business. So why arent people questioning a string of murders happening right on their doorstep?',
            pageNum: 336,
            isMovie: false
        }
    ];

    return (
        <main className="home">
            <h1 className="home__heading">
                Pick a Book
            </h1>
            <section className="home__books">
                {
                    books.map(book => (
                        <div className="home__books-book">

                            <div className="home__books-book-field">
                                <p className="home__books-book-field-lable">
                                    title:
                                </p>
                                <p className="home__books-book-field-text">
                                    {book.title}
                                </p>
                            </div>

                            <div className="home__books-book-field">
                                <p className="home__books-book-field-lable">
                                    author:
                                </p>
                                <p className="home__books-book-field-text">
                                    {book.author}
                                </p>
                            </div>

                            <div className="home__books-book-field">
                                <p className="home__books-book-field-lable">
                                    description:
                                </p>
                                <p className="home__books-book-field-text">
                                    {book.description}
                                </p>
                            </div>

                            <div className="home__books-book-field">
                                <p className="home__books-book-field-lable">
                                    number of pages:
                                </p>
                                <p className="home__books-book-field-text">
                                    {book.pageNum}
                                </p>
                            </div>

                        </div>
                    ))
                }
            </section>
        </main>
    )
}

export default HomePage;
