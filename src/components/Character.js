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
    const { name, details } = props;

    useEffect(() => {
        axios.get(`${BASE_URL}`)
        .then(res => {
            setCharStats(res.data);
            setCurrentName(name);
        })
        .catch(err => console.error(err))
    }, [name])

    return (
        <div>
            <StyledCharacter>
                <div>{ name }</div>
                <button 
                className='button'
                onClick={() => details}
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