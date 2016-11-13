import React from 'react';

export default function Record(props) {
    let record = props.record;
    // console.log(record);
    return (
        <li>
            {record["行业"]},
            {record["姓名"]},
            {record["机构"]},
            {record["名次"]}
        </li>
    )
}
