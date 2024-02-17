

function ThirdOther({ book }) {
    const curBook = book;

    return (
        <form className="edit-info">
            <div className="edit-info__field">
                <label htmlFor="author" className="edit-info__field-heading">
                    <p className="edit-info__field-heading-text">
                        author:
                    </p>
                </label>

                <div className='edit-info__field-value'>
                    <input
                        id='author'
                        className="edit-info__field-value-text"
                        placeholder={curBook.author}
                    >

                    </input>
                </div>
            </div>

            <div className="edit-info__field">
                <label htmlFor='description' className="edit-info__field-heading">
                    <p className="edit-info__field-heading-text">
                        description:
                    </p>
                </label>

                <div className="edit-info__field-value">
                    <input
                        id='description'
                        className="edit-info__field-value-text"
                        placeholder={curBook.description}
                    >

                    </input>
                </div>
            </div>

            <div className="edit-info__field">
                <label htmlFor='pages' className="edit-info__field-heading">
                    <p className="edit-info__field-heading-text">
                        page-count:
                    </p>
                </label>

                <div className="edit-info__field-value">
                    <input
                        id='pages'
                        className="edit-info__field-value-text"
                        placeholder={curBook.pageNum}
                    >

                    </input>
                </div>
            </div>

            <div className="edit-info__field">
                <label htmlFor='isMovie' className="edit-info__field-heading">
                    <p className="edit-info__field-heading-text">
                        is it a movie?
                    </p>
                </label>

                <div className="edit-info__field-value">
                    <input
                        id='isMovie'
                        className="edit-info__field-value-text"
                        placeholder={(curBook.isMovie).toString()}
                    >

                    </input>
                </div>
            </div>

            <div className='edit-info__button'>
                <button className='edit-info__button-button'>
                    save
                </button>
            </div>
        </form>
    )
}

export default ThirdOther;
