import React from 'react';
import styled from 'styled-components';
import '../App.css';

const StyledStats = styled.div
`
    color: ${props => props.theme.black};
    background-color: ${props => props.theme.secondaryColor};
    width: 20em;
    margin: 1em;
    border: 0.2em solid ${props => props.theme.black};
    border-radius: 1em;
    padding: 1em;
    font-weight: bold;
    font-size: 1.2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default function Stats(props) {
    const { height, mass, hairColor, skinColor, open, close } = props;

    return (
        <StyledStats 
            className="stats" 
            style={{display: open ? 'block': 'none'}}>
            <div>{ height }</div>
            <div>{ mass }</div>
            <div>{ hairColor }</div>
            <div>{ skinColor }</div>
            <button 
            className='button'
            onClick={() => close()}
            style={{ 
                borderRadius: '1em', 
                backgroundColor: 'black', 
                color: 'tan',
                fontWeight: 'bold',
                padding: '0.2em',
                marginTop: '1em',
                width: '6em'
            }}>Close</button>
        </StyledStats>
    )
}