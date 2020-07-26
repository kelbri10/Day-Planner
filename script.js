//when user opens the planner, the current day is displayed at the top of the calender\
let newDay = moment().format("MMM Do YYYY"); 
$('#currentDay').text(newDay); 

//when user scrolls down, user sees timeblocks for standard business hours - 9am - 5pm 
function createPlanner(){
    for(let i = 9; i <= 17; i++){  

        let timeBlock = document.createElement('div'); 
    
        let hour = document.createElement('p'); 
        let time = moment().set('hour', i).format('hA');
        hour.innerHTML = time;
        
        let saveBtn = document.createElement('BUTTON'); 
        let event = document.createElement('INPUT'); 
    
        timeBlock.setAttribute('class', 'row time-block');  

        hour.setAttribute('class', 'col-md-2 hour'); 

        event.setAttribute('class', 'col-md-8 description');

        //if (time === moment().get('hour')){ 
        //    event.setAttribute('class', 'present'); 
        //}

        saveBtn.setAttribute('class', 'col-md-2 saveBtn fas fa-save'); 
    
        timeBlock.append(hour, event, saveBtn); 
    
        $('.container').append(timeBlock); 

    }
}

//when user views timeblocks, each timblock indicates past, present, or future
//compare to current hr 

//if hour is before, display color gray

//if hour is equal, display color red 

//if hour is after, display color green 

//when user clicks a timeblock, user enters an event
//on click add event listener allow user to type in text box 

//when user clicks save button for timeblock the text is saved for that timeblock
//on click add event listener set value to localStorage 

//when user refreshes the page, the saved event is still existing

createPlanner(); 
console.log(moment()); 