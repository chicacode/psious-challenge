import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: center;
      margin: 0.5rem;
      padding: 0.5rem;
      color: #000;
      border: 1px solid #ddd;
      background: #fff;
      border-radius: 3px;
      font-size: 1rem;
      cursor: pointer;
    `;

const ButtonText = styled.div`
      margin: 0 1rem;
    `;

const Button = ({element, children})  => (
    <ButtonStyle onClick={element}>
        <svg width="24" height="24" viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
            />
        </svg>
        <ButtonText>{ children }</ButtonText>
    </ButtonStyle>

);

export default Button;