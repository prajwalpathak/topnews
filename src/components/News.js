import React from 'react';
import ContentBox from './ContentBox'

const News = (props) => {

    const data = props.news;
    const currentPage = props.currentPage;
    const perPage = props.perPage;
    const indexOfLastTodo = currentPage * perPage;
    const indexOfFirstTodo = indexOfLastTodo - perPage;
    const current = data.slice(indexOfFirstTodo, indexOfLastTodo);

    return (
        <div>
            {props.fetching ? 'Getting data...' : <ul>
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