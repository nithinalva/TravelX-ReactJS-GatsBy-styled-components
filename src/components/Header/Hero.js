import React from 'react'
import styled from 'styled-components'
import { ButtonC } from './Button'
const Hero = () => {
    return (
    
            <HeroContainer>
                <HeroBg>
                        <VideoBG type="video/mp4"></VideoBG>
                            <Heading>Unreal Destination</Heading>
                            <Para>Out of the world</Para>
                            <ButtonC>Travel Now</ButtonC>
                                
                </HeroBg>

            </HeroContainer>
        
    )
}

export default Hero

const HeroContainer= styled.div`
background:#0c0c0c;
display: flex;
justify-content: center;
color: #fff;
height: 100vh;
padding: 0 1rem;

`

const HeroBg=styled.div``

const VideoBG=styled.video``

const Heading =styled.h1`   `

const Para=styled.p``




