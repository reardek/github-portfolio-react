import React from 'react'
import './Link.css'

// eslint-disable-next-line react/prop-types
const Link = ({ url, title }) => (
    <a
        href={url}
        className='App-link'
        target='_blank'
        rel='noopener noreferrer'
    >
        {title}
    </a>
);

export default Link;
