import React from 'react'
import Faqs  from './data'
import SimpleAccordion from './index'

function Map() {
    
    return Faqs.map((val)=>{
        return(
            <div>
               
                <div>
             <SimpleAccordion
            ques={val.ques}
            ans={val.Ans}
    
            />
            </div>
            </div>
            )

    });
        
    
}

export default Map; 
