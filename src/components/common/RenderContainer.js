import React from 'react'
import DOMPurify from "dompurify"

export default function renderContainer(div) {
    if (div === '') return null;

    return <div className="container mw-100 render-container" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(div, { ADD_ATTR: ['target']}) }} />;
};
