// Write your Character component here
import React from 'react';
import styled from 'styled-components';
import '../App.css';

const StyledCharacter = styled.div
`
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.primaryColor};
    margin: 1em;
    padding: 1em;
    border: 0.2em solid tan;
    border-radius: 1em;
    box-shadow: 0.2em 0.25em 0.1em black;
    width: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.2em;
`

export default function Character(props) {
    const { name } = props;
    return (
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
    )
}