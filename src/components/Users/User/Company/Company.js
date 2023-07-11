import React from 'react';

const Company = ({company}) => {
    const {name, catchPhrase, bs} = company;
    return (
        <div>
            <h2>Company</h2>
            <div>name: {name}</div>
            <div>catchPhrase: {catchPhrase}</div>
            <div>bs: {bs}</div>
        </div>
    );
};

export {Company};