import {Route ,Switch} from 'react-router-dom'

import AllMeetup from './page/Allmeetups'
import NewMeetup from './page/NewMeetup'
import Favorites from './page/Favorites'

import RegisterPage from './page/RegisterPage'
import Layout from './components/layout/Layout'
// import {UserProvider} from './store/userContext'
function App() {
  return (
    <div>
      <Layout>
      <Switch>
        <Route path='/' exact={true}>
          <AllMeetup />
        </Route>

        {/* <UserProvider> */}
        <Route path='/NewMeetup'>
          <NewMeetup />
          </Route>

        
        <Route path='/favorites'>
          <Favorites />
        </Route>
        

        <Route path='/Register'>
          <RegisterPage />
        </Route>

        {/* </UserProvider> */}

      </Switch>
      </Layout>
      
      
    </div>
  );
}

export default App;
