import {Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute'
import LoginForm from './Components/LoginForm'
import Home from './Components/Home'
import NotFound from './Components/NotFound'
// eslint-disable-next-line import/extensions
import EveryJobSection from './Components/EveryJobSection'
import JobItemDetails from './Components/JobItemsDetails'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/jobs" component={EveryJobSection} />
      <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </>
)

export default App
