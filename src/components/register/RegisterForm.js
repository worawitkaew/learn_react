import {useRef} from 'react'

import Card from '../ui/Card'
import classes from '../meetups/NewMeetupFrom.module.css'

function NewMeetupFrom (props) {
    

    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    
    

    function submithandler(event){
        event.preventDefault();

        const enterusername = usernameInputRef.current.value;
        const enterpassword = passwordInputRef.current.value;
        
        
        const meetupData = {
            username: enterusername,
            password: enterpassword,
          
        };
        props.onAddMetup(meetupData);
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submithandler}>
                
                <div className={classes.control}>
                    <label htmlFor='title'>Username</label>
                    <input type="text" required id='title' ref={usernameInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='title'>Password</label>
                    <input type="text" required id='title'ref={passwordInputRef}/>
                </div>
              
                <div className={classes.actions}>
                    <button>register</button>
                    
                </div>
            </form>
        </Card>
    );
}
export default NewMeetupFrom;