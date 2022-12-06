import React from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, RadialChart} from 'react-vis';

const Pie = ({ dados }) => {
        return (
            <XYPlot width={300} height={300}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <RadialChart
                    data={dados}
                    style={{stroke: 'blue', strokeWidth: 3}}/>
            </XYPlot>
        );
}
export default Pie;