//when user opens the planner, the current day is displayed at the top of the calender\
let newDay = moment().format("MMM Do YYYY"); 
$('#currentDay').text(newDay); 

//when user scrolls down, user sees timeblocks for standard business hours - 9am - 5pm 
const createPlanner = () =>{

    //for-loop iterates through 9 to 17 to create timeblocks for business day
    for(let i = 9; i <= 17; i++){  

        let timeBlock = document.createElement('div'); 
    
        let hour = document.createElement('p'); 

        //sets time to corresponding time, sets hour html to time 
        let time = moment().set('hour', i).format('hA');
        hour.innerHTML = time;
        
        let saveBtn = document.createElement('BUTTON'); 
        let event = document.createElement('INPUT'); 

        //calls compare time function to determinie whether time block is 
        //green, gray or red 
        compareTime(i, event); 

        //sets attributes for time block, hour, save button 
        timeBlock.setAttribute('class', 'row time-block');  

        hour.setAttribute('class', 'col-md-2 hour'); 

        saveBtn.setAttribute('class', 'col-md-2 saveBtn fas fa-save'); 
    
        //adds hour event and save button to timeBlock div 
        timeBlock.append(hour, event, saveBtn); 

        //appends timeBlock to container div 
        $('.container').append(timeBlock); 

    }
}

const compareTime = (i, event) =>{
        //compares iterator to the current hour to determine color appears
        //to user 
        let present = moment().get('hour'); 

        //present displays red, past displays gray, future displays green
        if(i === present){ 
            event.setAttribute('class', 'col-md-8 description present'); 
        } else if (i < present){ 
            event.setAttribute('class', 'col-md-8 description past');
        } else {
            event.setAttribute('class', 'col-md-8 description future'); 
        }
}


//when user clicks a timeblock, user enters an event
//on click add event listener allow user to type in text box 

//when user clicks save button for timeblock the text is saved for that timeblock
//on click add event listener set value to localStorage 

//when user refreshes the page, the saved event is still existing

createPlanner(); 