

function ThirdBookInfo({ book }) {

    const curBook = book;

    function renderIsMovie(bool) {

        return (
            <div className={bool ? 'is-movie is-movie--yes' : 'is-movie is-movie--no'}>
                <p className={bool ? 'is-movie__text is-movie__text--yes' : 'is-movie__text is-movie__text-no'}>
                    {bool ? 'yes' : 'no'}
                </p>
            </div>
        )
    }

    return (
        <section className="book-info">

            <div className="book-info__field">
                <div className="book-info__field-heading">
                    <p className="book-info__field-heading-text">
                        author:
                    </p>
                </div>
                <div className="book-info__field-value">
                    <p className="book-info__field-value-text">
                        {curBook.author}
                    </p>
                </div>
            </div>

            <div className="book-info__field">
                <div className="book-info__field-heading">
                    <p className="book-info__field-heading-text">
                        description:
                    </p>
                </div>
                <div className="book-info__field-value">
                    <p className="book-info__field-value-text">
                        {curBook.description}
                    </p>
                </div>
            </div>

            <div className="book-info__field">
                <div className="book-info__field-heading">
                    <p className="book-info__field-heading-text">
                        page-count:
                    </p>
                </div>
                <div className="book-info__field-value">
                    <p className="book-info__field-value-text">
                        {curBook.pageNum}
                    </p>
                </div>
            </div>

            <div className="book-info__field">
                <div className="book-info__field-heading">
                    <p className="book-info__field-heading-text">
                        is it a movie?
                    </p>
                </div>
                <div className="book-info__field-value">
                    <p className="book-info__field-value-text">
                        {renderIsMovie(curBook.isMovie)}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ThirdBookInfo;
