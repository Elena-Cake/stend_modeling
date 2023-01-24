import React from "react";
import IntervalDate from "../IntervalDate/IntervalDate";
import ChartsSplider from "./ChartsSplider/ChartsSplider";
import './ResultsDone.css';
import TableResultsDone from "./TableResultsDone/TableResultsDone";

const ResultsDone = () => {
    return (
        <div className="resultsdone">
            <IntervalDate />
            <TableResultsDone />
            <ChartsSplider />
        </div>
    )
}

export default ResultsDone;