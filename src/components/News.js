import React from 'react';
import ContentBox from './ContentBox'

const News = (props) => {
    return (
        <div>
            {props.fetching ? 'Getting data...' : <ul>
                {props.news.slice(props.getStartData, props.getEndData).map((el, index) => (
                    <ContentBox
                        key={index}
                        news={el}>
                    </ContentBox>
                ))}
            </ul>}
        </div>
    );
}

export default News;