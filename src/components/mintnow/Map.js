import React from 'react'
import Data  from './data'
import MintSection from '../../components/mintnow/index'


function Map() {
    return Data.map((val)=>{
        return(
            <div >
            <MintSection
            imag={val.image}/>
            </div>
            
            )

    });
        
    
}

export default Map;
