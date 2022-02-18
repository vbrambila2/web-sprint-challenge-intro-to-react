// Write your Character component here
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../constants';
import styled from 'styled-components';
import Stats from './Stats';
import '../App.css';

const StyledCharacter = styled.div
`
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.primaryColor};
    width: 20em;
    margin: 1em;
    padding: 1em;
    border: 0.2em solid ${props => props.theme.secondaryColor};
    border-radius: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.2em;
`

export default function Character(props) {
    const [charStats, setCharStats] = useState("");
    const [currentName, setCurrentName] = useState("");
    const { name } = props;

    useEffect(() => {
        axios.get(`${BASE_URL}`)
        .then(res => {
            setCharStats(res.data);
            setCurrentName(name);
            console.log(currentName, "current");
        })
        .catch(err => console.error(err))
    }, [currentName, name])

    return (
        <div>
            <StyledCharacter>
                <div>{ name }</div>
                <button 
                className='button'
                style={{ 
                    borderRadius: '1em', 
                    backgroundColor: 'tan', 
                    fontWeight: 'bold',
                    padding: '0.7em',
                    width: '6em'
                }} 
                >Stats</button>
            </StyledCharacter>
            { name === currentName ? charStats.filter(x => x.name === name).map(char => {
                return <Stats height={char.height} mass={char.mass} hairColor={char.hair_color} skinColor={char.skin_color} key={char.name} />;
                }) : <h3>Loading...</h3>
            }
        </div>
    )
}

// color: ${props => props.theme.white};
//     background-color: ${props => props.theme.primaryColor};
//     margin: 1em;
//     padding: 1em;
//     border: 0.2em solid ${props => props.theme.secondaryColor};
//     border-radius: 1em;
//     box-shadow: 0.2em 0.25em 0.1em ${props => props.theme.black};
//     width: 25%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     font-weight: bold;
//     font-size: 1.2em;
