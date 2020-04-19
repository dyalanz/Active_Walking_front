  
import React  from 'react';
import Home from './home/home';
import { Route, Switch, withRouter } from 'react-router-dom';
import Map from './map/index';
import Walking from './walkinginformation/index';
import Building from './historybuilding/index';
import Aboutus from './aboutus/index';
import Dir from './map/map2';

const Entey= () => (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/maps" component={Map} />
            <Route path="/Walkinginfo" component={Walking} />
            <Route path="/HBuilding" component={Building} />
            <Route path="/Aboutus" component={Aboutus} />
            <Route path="/Dir" component={Dir}/>
          </Switch>
    
)
  export default withRouter(Entey);
  