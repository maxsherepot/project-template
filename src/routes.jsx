import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Accent from './pages/accent/Accent';
import OverHead from './pages/overhead/OverHead';


// const Private = ({ component: Component, ...rest }) => {

//   return (
//     <Route {...rest} render={props => {
//       if (rest.token) {
//         return <Component {...props} />
//       }
//       return <Redirect to="/auth" />
//       //return <Component {...props} />
//     }} />
//   );
// };


//const PrivateRoute = connect(mapStateToProps)(Private);

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={OverHead} />
      <Route path="/accent" component={Accent} />
      <Route path="/overhead" component={OverHead} />
      {/* <PrivateRoute path="/accent" component={Accent} />
      <PrivateRoute path="/overhead" component={OverHead} />
      <PrivateRoute path="/skan" component={Skan} /> */}
    </Switch>
  );
};


export default Routes;

