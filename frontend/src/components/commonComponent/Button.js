import React from 'react';
import styled from 'styled-components'

const PrimaryButton = styled.button`
      display: flex;
      align-items: center;
      width: max-content;
      height: 35px;
      text-transform: uppercase;
      color: black;
      background-color: transparent;
      border: 1px solid rgba(0, 0, 0, 0.23);
      cursor: pointer;
      padding: 6px 16px;
      font-size: 0.875rem;
      min-width: 64px;
      box-sizing: border-box;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      line-height: 1.75;
      border-radius: 4px;
      letter-spacing: 0.02857em;
      &:hover {
        text-decoration: none;
        background-color: rgba(0, 0, 0, 0.04);
      }
`;

function Button({onClick, link, children, className, title}) {
    return (
        <PrimaryButton
            className={`${className ? className : ""}`}
            to={link}
            onClick={onClick}
            title={title}
        >
            {children}
        </PrimaryButton>
    );
}

export default Button;
