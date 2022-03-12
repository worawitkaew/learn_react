// import { useHistory } from "react-router-dom";
import RegisterForm from "../components/register/RegisterForm";
import {UserContext} from '../store/userContext';
import {useContext} from 'react';

function NewMeetup() {
    // const history = useHistory();

    const UserCtx = useContext(UserContext);

    function onAddMetup (meetupData){
      
        fetch(
            'http://localhost:8000/api/token',
            {
                method: 'POST',
                body: JSON.stringify('grant_type=&username='+meetupData.username+'&password='+meetupData.password+'&scope=&client_id=&client_secret='),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        ).then((response) => response.json()
           
        ).then((data) =>  {
            console.log(data)
            if (data.access_token){
                
                UserCtx.settoken(data.access_token);
            } else {
                console.log(data.detail);
                
            }
        });
    }
    return (
        <section>
            <h1>Register</h1>
            <RegisterForm onAddMetup={onAddMetup}/>
        </section>
        
    );
}
export default NewMeetup;