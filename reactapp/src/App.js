import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Admin from "./components/admin/AdminHomepage/AdminHomePage";
import Review from "./components/admin/Review/Review";
  
function App() {
  return (
    <>
      {}
      <Router>
        <Switch>
          {}
          <Route exact path="/" component={Admin} />
            
          {}
          <Route path="/Appliedloan" component={Review} />
            
         
          {}
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}
  
export default App;