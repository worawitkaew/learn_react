import {useState, useEffect} from 'react'

import Meetuplist from '../components/meetups/Meetuplist'

// const DUMMY_DATA = [
//     {
//       id: 'm1',
//       title: 'This is a first meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//       id: 'm2',
//       title: 'This is a second meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//   ];

// function AllMeetips() {
//     return <section>
//         <h1>hello AllMeetips</h1>
//         {DUMMY_DATA.map((meetup) => {
//             return <li key={meetup.id}>{meetup.title}</li>;
//         })}
//         </section>;
// }
function AllMeetips() {
  const [isloading, setIsloading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

useEffect(() => {
  setIsloading(true);

  fetch('https://react-gettiing-start-default-rtdb.firebaseio.com/meetups.json'
  ).then(response => {
    return response.json();
  }).then(data =>{
    const meetups = [];
    for (const Key in data){
      const meetup = {
        id: Key,
        ...data[Key]
      };

      meetups.push(meetup);
    }
    setIsloading(false);
    setLoadedMeetups(meetups);
  });

}, []);

  if (isloading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

    return (<section>
        <h1>hello AllMeetips</h1>
        <Meetuplist meetups={loadedMeetups} />
        </section>);
}
export default AllMeetips;