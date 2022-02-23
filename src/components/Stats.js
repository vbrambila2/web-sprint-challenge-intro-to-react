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
    display: none;
`

export default function Stats(props) {
    const { height, mass, hairColor, skinColor } = props;
    return (
        <StyledStats className="stats">
            <div>{ height }</div>
            <div>{ mass }</div>
            <div>{ hairColor }</div>
            <div>{ skinColor }</div>
        </StyledStats>
    )
}