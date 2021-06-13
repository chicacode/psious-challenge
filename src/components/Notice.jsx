import React from 'react';
import styled from 'styled-components';

const NoticeStyle = styled.div`
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: center;
      padding: 0.5rem;
      margin: 0 0.5rem 0.5rem;
      border: 1px solid transparent;
      line-height: 1.5;
      color: #aaa;
    `;

const Notice = ({ children }) => (
    <NoticeStyle >
        {children}
    </NoticeStyle>
);

export default Notice;