/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page){

 
 let startIndex = (page * 9)-9;
 let endIndex = (page * 9);

 let studentList = document.querySelector ('.student-list');
 studentList.innerHTML='';

   for(let i=0; i< list.length; i++){
      if(i >= startIndex && i < endIndex){
         const student = list[i];
         let html = `
         <li class="student-item cf">
            <div class="student-details">
               <img class"avatar" src=${student.picture.large} alt="Profile Picture"
               <h3>${student.name.first} ${student.name.last}</h3>
               <span class="email">${student.email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${student.registered.date}</span>
            </div>
         </li>`;
         
         studentList.insertAdjacentHTML('beforeend', html);
      }
   } 
}

//showPage(data, 1);

  
   



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(data){
 // create a variable to calculate the number of pages needed
   let numOfPages = Math.ceil(data.length / 9)
   // select the element with a class of `link-list` and assign it to a variable
   const linkList = document.getElementsByClassName('link-list');
     // set the innerHTML property of the variable you just created to an empty string

   linkList.innerHTML='';


  // loop over the number of pages needed
  for (let i=1; i<=numOfPages; i++){
  
  
  // create the elements needed to display the pagination button
    // insert the above elements
   let button = `<li><button type="button">${i}</button></li>`;
   linkList.insertAdjacentHTML('beforeend', button);
  // give the first pagination button a class of "active"
         const activate = document.querySelector('button'); 
         activate.className='active';// create an event listener on the `link-list` element
         linkList.addEventListener("click", (e) =>{
         
         
            if (e.target.tagName === 'BUTTON'){

            const deactivate = document.getElementsByClassName('active');
            deactivate.className='';
            e.target.className='active';
            showPage(data, e.target.textContent)
            
         };

     });
    // if the click target is a button:
      // remove the "active" class from the previous button
      // add the active class to the clicked button
      // call the showPage function passing the `list` parameter and page to display as arguments
   };

   }




// Call functions
//function addPagination(data);
showPage(data, 1);
