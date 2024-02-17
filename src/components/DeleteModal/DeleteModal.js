import './DeleteModal.scss';

function DeleteModal({ setShowDeleteModal, handleDelete }) {

    function handleYes() {
        handleDelete();
        setShowDeleteModal(false);
    }

    return (
        <section className="delete-modal">
            <section className="delete-modal__modal">
                <p className="delete-modal__modal-text">
                    You sure?
                </p>
                <div className="delete-modal__modal-buttons">
                    <button onClick={() => setShowDeleteModal(false)} className="delete-modal__modal-buttons-button">
                        NO
                    </button>
                    <button onClick={handleYes} className="delete-modal__modal-buttons-button">
                        YES
                    </button>
                </div>
            </section>
        </section>
    )
}

export default DeleteModal;
