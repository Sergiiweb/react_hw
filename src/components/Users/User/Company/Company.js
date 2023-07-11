import React from 'react';

const Company = ({user}) => {
    const {company:{name,catchPhrase,bs}} = user;
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