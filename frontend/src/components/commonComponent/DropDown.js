import React, {useState} from "react";
import styled from "styled-components";
import {ChevronDownOutline, ChevronUpOutline} from "react-ionicons/lib";

const DropDownContainer = styled("div")`
    max-width: 50%;
    width: 100%;
    position: relative;
`;

const DropDownHeader = styled("div")`
    padding: 5px;
    box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    box-sizing: border-box;
    color: rgb(58 58 58 / 87%);
    -webkit-transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
    transition: box-shadow 300ms cubic-bezier(0.4,0,0.2,1) 0ms;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
        & svg {
        width: 14px;
        height: 14px;
        display: flex;
        align-items: center;
        fill: #a5a5a5;
        color: #a5a5a5;
    }
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
    width: 100%;
    position: absolute;
    z-index: 1;
    margin-top: 5px;
    font-size: 14px;
    font-weight: 500;
    color: rgb(58 58 58 / 87%);
    box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    box-sizing: border-box;
    border: 1px solid rgb(185 185 185 / 87%);
    border-radius: 2px;
    background-color: rgb(255, 255, 255);
    &:first-child {
        padding-top: 0.8em;
    a}
`;

const ListItem = styled("li")`
  list-style: none;
  padding: 5px;
  &:hover {
    background: #e8e8e8;
    width: 100%;
  }
`;

export default function DropDown({activeOption, listOptions}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggling}>
                {selectedOption || activeOption}
                {isOpen ? <ChevronUpOutline/> : <ChevronDownOutline/>}
            </DropDownHeader>
            {isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                        {listOptions.map(option => (
                            <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                                {option}
                            </ListItem>
                        ))}
                    </DropDownList>
                </DropDownListContainer>
            )}
        </DropDownContainer>
    );
}
