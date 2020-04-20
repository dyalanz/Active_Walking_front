import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Entey from './pages/index';
import { Link } from 'react-router-dom';



class App extends Component {
 render(){
   return (
    <div className="demo-big-content">
    <Layout>
   <Header title={<Link to = "/">Active Walking</Link>} scroll>
            <Navigation>
                <Link to="/maps">maps</Link>
                <Link to="/Walkinginfo">Walking</Link>
                <Link to="/HBuilding">Historic building</Link>
                <Link to="/Aboutus">About us</Link>
            </Navigation>
        </Header>
        <Drawer title="Active Walking">
            <Navigation>
                <Link to="/maps">maps</Link>
                <Link to="/Walkinginfo">Walking</Link>
                <Link to="/HBuilding">Historic building</Link>
                <Link to="/Aboutus">About us</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Entey/>
        </Content>
    </Layout>
</div>
 );}    
 }
 export default App;
