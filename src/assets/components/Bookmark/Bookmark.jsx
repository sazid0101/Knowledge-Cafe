import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className="bg-green-600 rounded-lg p-2 m-2">
            <h2 className='text-white'>{title}</h2>
        </div>
    );
};

export default Bookmark;