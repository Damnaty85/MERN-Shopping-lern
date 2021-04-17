import React, {useState} from 'react';
import { ArrowUp } from "react-ionicons/lib";
import styled from 'styled-components'

const ScrollToTopButton = styled.div`
        width: 40px;
        height: 40px;
        padding: 0;
        font-size: 0.875rem;
        min-width: 0;
        box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
        box-sizing: border-box;
        min-height: 36px;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-weight: 500;
        line-height: 1.75;
        border-radius: 50%;
        letter-spacing: 0.02857em;
        text-transform: uppercase;
        background-color: #e0e0e0;
        transition: transform 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        right: 30px;
        bottom: 30px;
        position: fixed;
        display: grid;
        place-items:center;
        cursor:pointer;
    `;


function ScrollToTop() {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop);

    return (
        <ScrollToTopButton
            onClick={scrollTop}
            style={{
                transform: !showScroll ? 'scale(0)' : 'none',
                visibility: !showScroll ? 'hidden' : 'visible'
            }}>
            <ArrowUp style={{lineHeight: '11px'}}/>
        </ScrollToTopButton>
    );
}

export default ScrollToTop;
