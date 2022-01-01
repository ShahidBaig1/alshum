import React from 'react'
import Data  from './data'
import Cards from '../Cards/index'


function Maps() {
    return Data.map((val)=>{
        return(
            <div >
            <Cards
            imags={val.image}/>
            </div>
            )

    });
        
    
}

export default Maps;