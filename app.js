const DayError = Document.querySelector('.day-error');
const MonthError = Document.querySelector('.month-error');
const YearError = Document.querySelector('.year-error');
const YearResult = Document.querySelector('.year-result');
const MonthResult = Document.querySelector('.month-result');
const DayResult = Document.querySelector('.day-result');
const Submitbtn = Document.querySelector('.btn');
const InputDay = Document.querySelector('day');
const InputMonth = Document.querySelector('month');
const Inputyear =  Document.querySelector('month');
const InputDayError = 'This field is required';
const InputMonthError ='Must be a valid day';
const InputYearError = 'Must be in the past';
const Canvas = Document.querySelector('.can');


function CheckDayInput()
{
    let value = InputDay.value;
    if(value == '')
    {
        DayError.innerHTML = InputRequiredError;
        return false;
    }
    else if(value < 1 || value>31)
    {
        DayError.innerHTML = InputDayError;
        return false;
    }
    else
    {
        DayError.innerHTML = '';
        return true;
    }
}
function CheckMonthInput()
{
    let value = InputMonth.value;
    if(value == '')
    {
        MonthError.innerHTML = InputRequiredError;
        return false;
    }
    else if(value < 1 || value>12)
    {
        MonthError.innerHTML = InputMonthError;
        return false;
    }
    else
    {
        MonthError.innerHTML = '';
        return true;
    }
}

function CheckYearInput()
 {
     let value = InputYear.value;
     let currentYear = new Date().getUTCFullYear();
     console.log(currentYear);
     if(value == '')
     {
        YearError.innerHTML = InputRequiredError;
         return false;
     }
     else if(value >  currentYear)
     {
        YearError.innerHTML = InputYearError;
         return false;
     }
     else
     {
        YearError.innerHTML = '';
         return true;
     }
 }


function calculateAge(birthday) {
    var birthdate = new Date(birthday);
    var today = new Date();

    var years = today.getFullYear() - birthdate.getFullYear();
    var months = today.getMonth() - birthdate.getMonth();
    var days = today.getDate() -  birthdate.getDate();

    if(months < 0 || (months === 0 && days < 0)) {
        years--;
        if(months === 0) {
            months = 11;
        }else {
            months = 12 + months;
        }
        days =30 + days;
    }

    YearResult.innerHTML = years;
    MonthResult.innerHTML = months;
    DayResult.innerHTML = days;
}


Submitbtn.addEventListener('click', function(e)) {
    e.preventDefault();
    let day = CheckDayInput();
    let month = CheckMonthInput();
    let year = CheckYearInput();
    if(!day || !month || !year) return
    let birthday =`${InputMonth.value}/${InputDay.value}/${Inputyear.value}`;
    calculateAge(birthday);
    Canvas.style.display = 'block';
    setTimeout(function() {
        Canvas.style.display = 'none';
    },8000);
}