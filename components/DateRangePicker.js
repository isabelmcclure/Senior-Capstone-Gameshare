// date picker implementation from https://nextjscourse.com/_course2020/3-date-picker/4-add-calendar/
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

export default function DateRangePicker(){
    return(
        <div className= 'date-range-picker-container'>
            <div>
                <label>From:</label>
                <DayPickerInput />
            </div>
            <div>
                <label>To:</label>
                <DayPickerInput />
            </div>
            <style jsx>
                {`
                    .date-range-picker-container div {
                    display: grid;
                    grid-template-columns: 30% 70%;
                    padding: 10px;
                    font-family: "Montserrat", sans-serif;
                  }
                  label {
                    padding-top: 10px;
                    font-family: "Montserrat", sans-serif;
                  }
                `}
            </style>
            <style jsx global>
                {`
                    .DayPickerInput input {
                    width: 120px;
                    padding: 10px;
                    font-size: 16px;
                    font-family: "Montserrat", sans-serif;
                    }
                `}
            </style>
        </div>
    )
}