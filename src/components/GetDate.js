import React from 'react';

const GetDate = () => {
    var currentDate = new Date()
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()

    return (
        <div>
            <h2>{`${day}-${month}-${year}`}</h2>
        </div>
    );
}

export default GetDate;