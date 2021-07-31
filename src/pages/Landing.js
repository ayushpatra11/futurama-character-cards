import React, { useEffect, useState } from 'react'
import styled, {keyframes} from 'styled-components'
import banner from '../images/banner.png'
import textbanner from '../images/textbanner.png'
import ship from '../images/ship.png'
import { motion } from 'framer-motion'
import axios from 'axios'
import Cards from '../components/Cards'

const floating1 = keyframes`
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 18px); }
    100%   { transform: translate(0, -0px); }
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-image: linear-gradient(#76CFCF, #fff);
    align-items: center;
    text-align: center;
    justify-content: flex-start;
    position: relative;
`;

const ImageText = styled(motion.img)`
    object-fit: contain;
    width: 40%;
    margin: 10px;
    @media only screen and (max-width: 500px){
        width: 70%;
    }
`;
const Image = styled(motion.img)`
    object-fit: contain;
    width: 20%;
    margin-top: -20px;
    ${'' /* animation: ${floating1} 3s ease-in-out infinite; */}
    @media only screen and (max-width: 500px){
        width: 40%;
    }
`;

const ImageShip = styled(motion.img)`
    object-fit: contain;
    width: 10%;
    position: absolute;
    left: ${props=> props.left};
    top: ${props => props.top};
    animation: ${floating1} 3s ease-in-out infinite;
    @media only screen and (max-width: 500px){
        width: 15%;
    }
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    ${'' /* overflow-x: scroll; */}
    overflow-x: visible;
    overflow-y: hidden;
    min-height: 80vh;
    position: relative;
    width: 100%;
    align-items: center;
    margin: 50px 20px;
`;

const Character= styled.h1`
    align-self: center;
    color: linear-gradient(#7D1A16, #EA3423);
    font-size: 3.5rem;
    text-align:center;
    z-index: 10;
    margin-bottom: 0;
`;
const CharacterInfo= styled.h1`
    align-self: center;
    color: linear-gradient(#7D1A16, #EA3423);
    font-size: 1.5rem;
    text-align:center;
    z-index: 10;
    margin-bottom: 0;
`;


function Landing() {
    const [characters, setCharacters] = useState();

    const getCharacters = async () => {
        const res=await axios.get('https://api.sampleapis.com/futurama/characters');
        const data = await res.data;
        setCharacters(data);
    }
    useEffect(() =>{
        getCharacters();
    }, []);


    return (
        <div>
            <Container>
            
                <ImageText src={textbanner} alt="" />
                <Image src={banner} alt="" />
                <ImageShip left="10%" top="10%" src={ship} alt="" />
                <ImageShip left="80%" top="10%" src={ship} alt="" />
                
                <Character>Character Cards</Character>
                <CharacterInfo>Grab and move Each card for 3d effect</CharacterInfo>
                <CardContainer>
                { characters && characters.map((character)=> {
                    return(
                        character.name && <Cards image={character.images?character.images.main: ""} name={character.name} gender={character.gender} species={character.species} homeplanet={character.homePlanet ? character.homePlanet: "-"} occupation={character.occupation?character.occupation: "----" } famoussaying= {character.sayings[0]}/>
                    )
                })}
                    
                </CardContainer> 
            </Container>
        </div>
    )
}

export default Landing
