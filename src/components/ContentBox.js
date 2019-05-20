import React from 'react';

const ContentBox = (props) => {

    return (
        <div className="content">
            {<li>{props.news.title}: {props.news.abstract}</li>}
        </div>
    );
}

export default ContentBox;