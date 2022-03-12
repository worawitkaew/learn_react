import { useHistory } from "react-router-dom";
import NewMeetupFrom from "../components/meetups/NewMeetupForm";
function NewMeetup() {
    const history = useHistory();
    function onAddMetup (meetupData){
        fetch(
            'https://react-gettiing-start-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });
    }
    return (
        <section>
            <h1> Add New Meetup </h1>
            <NewMeetupFrom onAddMetup={onAddMetup}/>
        </section>
        
    );
}
export default NewMeetup;