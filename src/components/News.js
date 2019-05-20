import React from 'react';
import ContentBox from './ContentBox'
import Loader from './Loader';

const News = (props) => {

    const data = props.news;
    const currentPage = props.currentPage;
    const perPage = props.perPage;
    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const current = data.slice(indexOfFirst, indexOfLast);

    return (
        <div>
            {props.isLoading ? <Loader /> :
                <ul>
                    {current.map((el, index) => (
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