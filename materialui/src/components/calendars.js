import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { YearCalendar } from '@mui/x-date-pickers/YearCalendar';
import { MonthCalendar } from '@mui/x-date-pickers/MonthCalendar';

import dayjs from 'dayjs';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function Calendars() {
    return (
      <div>
        <h2></h2>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={4}>          
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </Grid>
        
        <Grid xs={4}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['YearCalendar']}>
              <DemoItem label="YearCalendar">
                <YearCalendar />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </Grid>

        <Grid xs={4}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['MonthCalendar']}>
              <DemoItem label="MonthCalendar">
                <MonthCalendar />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </Grid>

        
        <Grid xs={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker']}>
              <DemoItem label="Responsive variant">
                <DateTimePicker defaultValue={dayjs('2023-09-12T15:30')} />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </Grid>

        <Grid xs={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDateTimePicker orientation="landscape" />
          </LocalizationProvider>
        </Grid>
        
      </Grid>
    </Box>

      </div>
    );
  }
  
  export default Calendars;