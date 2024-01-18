import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'


const Hero = () => {
  return (
    <section className="hero-wrapper">
       <div className='paddings innerWidth flexCenter hero-container '>
    {/* comment for the left side */}
        <div className='flexColStart hero-left'>
            <div className="hero-title">
                <div className='orange-circele'/>

               <motion.h1
               initial={{y: "2rem", opacity: 0}}
               animate={{y:0, opacity:1}}
               transition={{
                   duration: 2,
                   type: "spring"
               }}
               
               > Discover<br/>
                Most Suitable<br/> Property
                </motion.h1>
                
            </div>
            <div className="flexColStart hero-des">
                <span className='secondaryText'>Find a variety of properties that suite you very easily</span>
                <span className='secondaryText'>forget all fifficulties in finding a residence for you</span>
            </div>
            <div className='flexCenter search-bar'>
                <HiLocationMarker color ="var(--blue)" size={25}/>
                <input type='text'/>
                <button className='button'>Search</button>
            </div>
            <div className="flexCenter stats">
                <div className='flexColCenter stat'>
                    <span>
                        <CountUp start={8800} end={9000} duration={4}/>
                        <span>+</span>
                    </span>
                  
                    <span className='secondaryText'>premimum products</span>
                </div>
                <div className='flexColCenter stat'>
                    <span>
                        <CountUp start={1950} end={2000} duration={4}/>
                        <span>+</span>
                    </span>
                  
                    <span className='secondaryText'>happy coustomers</span>
                </div>
                <div className='flexColCenter stat'>
                    <span>
                        <CountUp  end={30} />
                        <span>+</span>
                    </span>
                  
                    <span className='secondaryText'>Award winning</span>
                </div>
            </div>
        </div>
{/*  code for sight side */}
        <div className='flexCenter hero-right'>
            <motion.div
            initial={{x:"7rem", opacity:0}}
            animate={{x: 0, opacity:1}}
            transition={{
                duration: 2,

                type: "spring"
            }}

            className='image-container'>
                <img src="./hero-image.png" alt=""></img>
            </motion.div>
        </div>
        </div> 
    </section>
  )
}

export default Hero