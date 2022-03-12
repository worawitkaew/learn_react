import classes from './Meetuplist.module.css';
import Meetupitem from './Meetupitem'
function Meetuplist(props) {
    return (
        <ul className={classes.list}>
            {props.meetups.map(meetups => <Meetupitem 
            key={meetups.id} 
            id={meetups.id} 
            image={meetups.image} 
            title={meetups.title} 
            address={meetups.address} 
            description={meetups.description}/>)}
        </ul>
    );
}
export default Meetuplist;