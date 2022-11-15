const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  const createDaysOfTheMonth = () => {
    // const getDayList = document.querySelector('#days')
    const getDayList = document.getElementById('days')
    for (let index = 0; index < decemberDaysList.length; index += 1) {
      let day = decemberDaysList[index];
      let dayItem = document.createElement('li')
      
      dayItem.innerHTML = day;
      if (day === 24 || day === 31) {
        //classe holiday 
        dayItem.className = 'day holiday';
        getDayList.appendChild(dayItem);
      } else if (day === 4 || day === 11 || day ===18) {
        //classe friday
        dayItem.className = 'day friday';
        getDayList.appendChild(dayItem);
      } else if ( day === 25) {
        // classe holiday e friday
        dayItem.className = 'day friday holiday';
        getDayList.appendChild(dayItem);
      } else {
        //classe day
        dayItem.className ='day';
        getDayList.appendChild(dayItem);
      }
    }
  }
  createDaysOfTheMonth();
  
  const createHolidayButton = (buttonName) => {
    const buttonContainer = document.querySelector('.buttons-container');
    const newButton = document.createElement('button');
    const newButtonId = 'btn-holiday';
    
    newButton.innerHTML = buttonName;
    newButton.id = newButtonId;
    
    buttonContainer.appendChild(newButton);
  }
  createHolidayButton('Feriados');  
  
  const displayHolidays = () => {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
      getHolidayButton.addEventListener('click', () => {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    });
  }

  displayHolidays();

  //parte 4
  const createFridayButton = (buttonName) => {
    let buttonContainer = document.querySelector('.buttons-container')
    let newButton = document.createElement('button');
    let newButtonId = 'btn-friday'

    newButton.innerHTML = buttonName;
    newButton.id = newButtonId; 
    buttonContainer.appendChild(newButton);
  }

  createFridayButton('Sexta-feira');

  //parte 5
  const DisplayFridays = (fridaysArray) => {
    let getFridayButton = document.getElementById('btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOU o/'
    
    getFridayButton.addEventListener('click', () => {
      for (let index = 0; index < fridays.length; index += 1) {
        (fridays[index].innerHTML !== newFridayText) ?
        fridays[index].innerHTML = newFridayText :
        fridays[index].innerHTML = fridaysArray[index];
      }
    });
  }

  DisplayFridays(decemberDaysList);

  //parte 6
  const dayMouseOver = (target) => {
    let days = document.getElementById('days');
    days.addEventListener('mouseover', (event) => {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600'
    })
  }
  const dayMouseOut = (target) => {
    let days = document.getElementById('days');
    days.addEventListener('mouseout', (event) => {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200'
    })
  }
  dayMouseOver();
  dayMouseOut()