import React from 'react'
import  styled from 'styled-components'
import { motion, useMotionValue, useTransform } from 'framer-motion';


const Card = styled(motion.div)`
    width: 300px;
    margin: 20px;
    cursor: grab;
    height: 500px;
    border-top-right-radius: 47px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 8px;
    border: 8px solid #F5ED73;
    background-image: linear-gradient(#7D1A16, #EA3423);
    box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
    position: relative;
`;

const Wrapper = styled.div`
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    border-top-right-radius: 30px;
`;

const Circle = styled.div`
    border-radius: 50%;
    height: 350px;
    width: 350px;
    position: absolute;
    top: -170px;
    right: -160px;
    background-color: ${props => props.color? props.color: "none"};
    z-index: 5;
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 300px;
    position: relative;
    align-items:center;
    padding: 1em 16px;
`;

const Image = styled(motion.img)`
    max-width: 150px;
    z-index: 11;
    position: absolute;
    bottom: 35px;
    cursor: grab;
    `;

    const Bottom = styled.div`
    display: flex;
    flex: 0.8;
    padding: 16px;
`;

const CharacterName= styled.h1`
    position: absolute;
    bottom: 55px;
    color: #fff;
    font-size: 3.5rem;
    text-align:center;
    z-index: 10;
`;

const Occupation=styled.h3`
    position: absolute;
    bottom: 10px;
    margin: 0;
    color: #F5ED73;
    font-size: 1.5rem;
`;

const Info = styled.h5`
    text-align: left;
    position: absolute;
    bottom: 50px;
    line-height: 30px;
    color: #fff;
    font-size: 1.2rem;
`;

function Cards({image, name, gender, species, homeplanet, occupation, famoussaying}) {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX= useTransform(y, [-100, 100], [30, -30]);
    const rotateY= useTransform(x, [-100, 100], [-30, 30]);

    return (
        <div>
            <Card
            style = {{x, y, rotateX, rotateY, z: 100}}
            drag
            dragElastic={0.16}
            dragConstraints={{top: 0, bottom: 0, left: 0, right: 0}}
            whileTap={{cursor: "grabbing"}}
            >
                <Top>
                    <Wrapper>
                        <Circle color="#F5ED73" />
                    </Wrapper>
                    <Image
                    src={image}
                    alt="Image unavailable"
                    style = {{x, y, rotateX, rotateY, z: 100}}
                    drag
                    dragElastic={0.10}
                    dragConstraints={{top: 0, bottom: 0, left: 0, right: 0}}
                    whileTap={{cursor: "grabbing"}}
                    >
                    </Image>
                    <CharacterName>{name.first} {name.middle} {name.last}</CharacterName>
                    
                </Top>
                <Bottom>
                <Info>
                Gender: {gender} <br />Species: {species} <br />Home Planet: {homeplanet}          
                </Info>
                <Occupation>
                {occupation}
                </Occupation>
                </Bottom>
            </Card>
        </div>
    )
}

export default Cards
