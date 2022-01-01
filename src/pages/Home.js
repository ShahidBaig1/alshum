import React from 'react'
import Slotsection from '../components/slotSection/index'
import Map from '../components/mintnow/Map'
import useStyles from "./style.js"
import Trait from '../components/traits/Trait'
// import Maps from '../components/Cards/index'
import Stat from '../components/Stats/index'
import Button1 from '../components/Units/Button'
import Slidesecmap from '../components/Slider/Map'
import Community from '../components/Community/index'
import SimpleAccordion from "../components/AcordianSec/map"
import Counter from '../components/Countersection/index'  
import Foter from '../components/footer/index'






function Home() {
    const classes = useStyles();
    return (
        <div style={{backgroundColor:'#1E1F25'}}>
            <Slotsection/>
            <div className={classes.mapsec}>
            <Map/>
            </div>
            <Button1/>
            <Trait/>
            <Counter/>
            <Slidesecmap/>
            <Stat/>
            <Community/>
            <div style={{backgroundColor:'#1E1F25',fontWeight:'700',fontSize:'16'}}>
        <h1 style={{color:'#fbd725'}}>FREQUENTLY ASKED QUESTIONS</h1>
        <h5 style={{color:'white'}}>You have questions, and we have answers. Couldn't find an anwser? Hop in our Discord Community!</h5>
      
            <SimpleAccordion/>
            </div>
            <Foter/>
            
            
            
        </div>
    )
}

export default Home
