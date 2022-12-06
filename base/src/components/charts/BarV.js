import React from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, VerticalBarSeries} from 'react-vis';

const BarV = ({ dados }) => {
        return (
            <XYPlot width={300} height={300}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                
                <VerticalBarSeries data={dados} 
                    style={{opacity: 0.4, fill: "yellow"}}/>
            </XYPlot>
        );
}
export default BarV;