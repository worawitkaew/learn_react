import {useState} from 'react'

import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props){
    const [modalIsopen, setModalIsopen] = useState(false);


    function deleteHandler(){
        // console.log(props.text);
        // console.log(modalIsopen);
        setModalIsopen(true);
        
    }

    function closemodal(){
        setModalIsopen(false);
        
    }
    return (
    <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
            <button className='btn' onClick={deleteHandler}>
                Delete
            </button>
        </div>
        {/* {modalIsopen ? <Modal /> : null} */}
        {modalIsopen && <Modal onCancel={closemodal} onConfirm={closemodal}/>}
        {modalIsopen && <Backdrop onCancel={closemodal}/>}
        
    </div>
    );
}

export default Todo;