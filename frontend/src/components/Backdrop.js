import React from 'react';

function Backdrop({show, click}) {
    return show && (
        <div className={`backdrop`} onClick={click}></div>
    );
}

export default Backdrop;
