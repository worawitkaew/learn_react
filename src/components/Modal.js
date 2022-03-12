function Modal(props) {
    function Cancelmodal(){
        props.onCancel();
    }

    function Confirmmodal(){
        props.onConfirm();
    }

    return (
        <div className='modal'>
            <p>Are you sure?</p>
            <button className='btn btn--alt' onClick={Cancelmodal}>Cancel</button>
            <button className='btn' onClick={Confirmmodal}>Confirm</button>

        </div>
    );
}

export default Modal;