import React from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';

const Linear = ({ dados }) => {
        return (
            <XYPlot width={300} height={300}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineSeries
                    data={dados}
                    style={{stroke: 'blue', strokeWidth: 3}}/>
            </XYPlot>
        );
}
export default Linear;