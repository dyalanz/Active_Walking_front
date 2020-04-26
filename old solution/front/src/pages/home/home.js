import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import home1 from './UI/home1.jpg';
import { Link } from 'react-router-dom';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import C1 from './UI/C1.jpg';
import C2 from './UI/C2.jpg';
import C3 from './UI/C3.jpg';



// Carousel 


class Home extends Component {
    render(){
        return(   
        <div  style={{width:'100%', margin: 'auto'}} >
             <img
                   src={home1}
                   alt=""
                   className="img-home"
                   />          
           <Grid className='home-grid'>
               <Cell col={12}>                 
                       <h1>START YOUR</h1>
                       <h1>WALKING TRIP</h1>
                    <hr/>
                    <div className="text-home">
                    <Link to="/maps">Learn More</Link>
                    </div> 					
             <Carousel style={{width:'30%',margin:'auto'}} autoPlay={true}>
                <div>
                    <img src={C1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={C2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={C3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>  
               </Cell>              
           </Grid>
        </div>    
        )
    }
}


export default Home;