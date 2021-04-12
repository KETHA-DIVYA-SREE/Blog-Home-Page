import React from 'react';
import './../App.css';

function Header(props) {
    return (
        <>
        <div className="Header">
        {props.headerList.map(headerItem=>
            <>
            <a href={headerItem.url}>{headerItem.title}</a>
            </>
        )}
        </div>
        <hr />
        </>
    );
}

export default Header;