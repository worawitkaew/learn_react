import {useRef} from 'react'
import {useState} from 'react'
// import {useContext} from 'react';

import Card from '../ui/Card'
import classes from './NewMeetupFrom.module.css'

// import RegisterPage from '../../page/RegisterPage'

// import {UserContext} from '../../store/userContext';

function NewMeetupFrom (props) {
    const [temp,settemp] = useState('Add your title');
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const adressInputRef = useRef();
    const descriptionInputRef = useRef();
    
    // const UserCtx = useContext(UserContext);
    
    function submithandler(event){
        event.preventDefault();
        
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAdress = adressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        
        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAdress,
            description: enteredDescription,
        };
        props.onAddMetup(meetupData);
    }
    
    // if (!UserCtx.token){
    //     return <RegisterPage />
    // }
    
    return (
        <Card>
            <div className={classes.control}><label>Your Title: {temp}</label></div>

            <form className={classes.form} onSubmit={submithandler}>
                
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type="text" required id='title' ref={titleInputRef} onChange={e => settemp(e.target.value)}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type="url" required id='image'ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type="text" required id='adress' ref={adressInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea type="description" required row='5' ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                    
                </div>
            </form>
        </Card>
    );
}
export default NewMeetupFrom;