import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart, pieArcClasses } from '@mui/x-charts/PieChart';

const chartSetting = {
    yAxis: [
      {
        label: 'rainfall (mm)',
      },
    ],
    width: 500,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'rotate(-90deg) translate(0px, -20px)',
      },
    },
  };
  const dataset = [
    {
      london: 59,
      paris: 57,
      newYork: 86,
      seoul: 21,
      month: 'Jan',
    },
    {
      london: 50,
      paris: 52,
      newYork: 78,
      seoul: 28,
      month: 'Fev',
    },
    {
      london: 47,
      paris: 53,
      newYork: 106,
      seoul: 41,
      month: 'Mar',
    },
    {
      london: 54,
      paris: 56,
      newYork: 92,
      seoul: 73,
      month: 'Apr',
    },
    {
      london: 57,
      paris: 69,
      newYork: 92,
      seoul: 99,
      month: 'May',
    },
    {
      london: 60,
      paris: 63,
      newYork: 103,
      seoul: 144,
      month: 'June',
    },
    {
      london: 59,
      paris: 60,
      newYork: 105,
      seoul: 319,
      month: 'July',
    },
    {
      london: 65,
      paris: 60,
      newYork: 106,
      seoul: 249,
      month: 'Aug',
    },
    {
      london: 51,
      paris: 51,
      newYork: 95,
      seoul: 131,
      month: 'Sept',
    },
    {
      london: 60,
      paris: 65,
      newYork: 97,
      seoul: 55,
      month: 'Oct',
    },
    {
      london: 67,
      paris: 64,
      newYork: 76,
      seoul: 48,
      month: 'Nov',
    },
    {
      london: 61,
      paris: 70,
      newYork: 103,
      seoul: 25,
      month: 'Dec',
    },
  ];
  
  const valueFormatter = (value) => `${value}mm`;
  

  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
  ];
  
  
const data = [
    { id: 0, value: 10, label: 'series A' },
    { id: 1, value: 15, label: 'series B' },
    { id: 2, value: 20, label: 'series C' },
  ];
  
function Charts() {
    return (
      <div>
        
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={6}>
            <BarChart
            xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
            width={500}
            height={300}
            />    
        </Grid>

        <Grid xs={6}>
            <BarChart
            dataset={dataset}
            xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
            series={[
                { dataKey: 'london', label: 'London', valueFormatter },
                { dataKey: 'paris', label: 'Paris', valueFormatter },
                { dataKey: 'newYork', label: 'New York', valueFormatter },
                { dataKey: 'seoul', label: 'Seoul', valueFormatter },
            ]}
            {...chartSetting}
            />
        </Grid>

        <Grid xs={6}>
            <LineChart
            width={500}
            height={300}
            series={[
                { data: pData, label: 'pv', id: 'pvId' },
                { data: uData, label: 'uv', id: 'uvId' },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
            sx={{
                '.MuiLineElement-root, .MuiMarkElement-root': {
                strokeWidth: 1,
                },
                '.MuiLineElement-series-pvId': {
                strokeDasharray: '5 5',
                },
                '.MuiLineElement-series-uvId': {
                strokeDasharray: '3 4 5 2',
                },
                '.MuiMarkElement-root:not(.MuiMarkElement-highlighted)': {
                fill: '#fff',
                },
                '& .MuiMarkElement-highlighted': {
                stroke: 'none',
                },
            }}
            />
        </Grid>

        <Grid xs={6}>
            <PieChart
            series={[
                {
                data,
                highlightScope: { faded: 'global', highlighted: 'item' },
                faded: { innerRadius: 30, additionalRadius: -30 },
                },
            ]}
            sx={{
                [`& .${pieArcClasses.faded}`]: {
                fill: 'yellow',
                },
            }}
            height={200}
            />
        </Grid>

      </Grid>
    </Box>

      </div>
    );
  }
  
  export default Charts;
  