import React, {Component,useState }  from 'react';
import {GoogleMap, Marker, withGoogleMap,withScriptjs ,InfoWindow} from 'react-google-maps';
import { Grid, Cell, Textfield,Button,Tab,Tabs, Card,CardTitle,CardActions,CardText,CardMenu, IconButton} from 'react-mdl';
import { Link } from 'react-router-dom';
import map1 from './UI/map1.png'
import './map.css';
import tempData from './UI/temp.json';


/**
 * get user location
 */
const getLocation = () =>{
  const pos = {};
  const geolocation = navigator.geolocation;
  if (geolocation) {
     geolocation.getCurrentPosition(findLocal, showEror);
  }
  function findLocal(position){
    pos.lat = position.coords.latitude;
    pos.lng = position.coords.longitude;  
  }
  function showEror(){console.log(Error)}
  return pos;
};
const myLocation = getLocation();


/**
 * get hostorical building info 
 * add them into map
 */
function Mapg(){
  const [selectedPark, setSelectedPark] = useState(null);
  
  return(
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{lat: -37.898287,lng:145.045145}}
    >
   

    {tempData.map(park => (          //json file
        
        <Marker
          key={park.id}
          position={{
            lat: park.lat,
            lng: park.long
          }}
          onClick={() => { setSelectedPark(park); }}
          icon={{
            url: `/bank.svg`,
            scaledSize: new window.google.maps.Size(26, 26)
          }}
        />
    ))}
        {selectedPark && (
            <InfoWindow
              onCloseClick={() => { setSelectedPark(null); }}
              position={{
                lat: selectedPark.lat,
                lng: selectedPark.long
              }}
            >
              <div>
                <h4>{selectedPark.name}</h4>
                <p>{selectedPark.summary}</p>
              </div>
            </InfoWindow>
          )}
        <Marker
        position={myLocation}
        />
       
          
                  
    </GoogleMap>
  );
}

const MycusMap = withScriptjs(withGoogleMap(Mapg));





class Map extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 0
    }   
}

  render() {
  
    
    return (
        
      // Important! Always set the container height explicitly
      <div  style={{width:'100%', margin: 'auto'}} >
         <img
                src={map1}
                alt=""
                className="img-map"
                />  
             <div>   
             <h1>Find your historical building</h1>   </div>
      <Grid className='map-grid'>
          <Cell col={9}>
         
      <div style={{ height: '50vh', width: '100%' }}>
        <MycusMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAt8uw2fWoF75ug3uG6doSkCYiQNmR47-A&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}   
          currentLocation={this.state.currentLatLng} 
        />
      </div>
      </Cell>  
      <Cell col={3}>
       <div className="search">
      <Textfield
        onChange={() => {}}
        label=" Your Address"
        pattern="^[^@!#$%^&*()-+=]+$"   //set no symbol
        error="Input is symbol!"
        floatingLabel
        style={{width: '200px', }}
       />  

       <Button raised colored
       onClick={() => { this.setState() }}
       >Search</Button>   
        </div>
        <div>
        
        </div>
          </Cell>            
           </Grid>
           <div>
             <hr/>
           <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>LIST ONE</Tab>
                    <Tab>LIST TWO</Tab>
                    <Tab>LIST THREE</Tab>
                </Tabs>
                <section >
                  <div className="content">Content for the tab: {this.state.activeTab}
                  <Grid  >
                          {tempData.map(hplace =>{
                          
                          return( 
                            
                            <div className=" buildings-grid"> 
                          <div key={hplace.id} >  
                          
                          <Card shadow={0} style={{width: '480px', margin: 'auto'}}> 
                          <CardTitle style={{color: '#fff', height: '176px', backgroundImage: `url(${hplace.image_url})`, backgroundSize: 'cover', backgroundSize:'center' }}>
                            {hplace.name}</CardTitle>
                          <CardText className="text-color">
                              <p>{hplace.summary}</p>
                          </CardText>  
                          <CardActions border>  
                          <Link to="/Dir">
                         <Button colored >Get Started</Button>
                         </Link>
                           </CardActions>
                           </Card>
                            </div>
                           </div>                   
                                 )
                                 }
                                     )
                               }    
                </Grid>
                </div>
                </section>
            </div>    
           </div>  
        </div>   
    );
  }
}

export default Map;