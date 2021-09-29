/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



// function to create and insert 9 students 

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
            <img class='avatar' src=${student.picture.large} alt="Profile Picture">
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


// create function to assign numbered buttons for each page of 9 students 
  
function addPagination(data){
 
   let numOfPages = Math.ceil(data.length / 9)
   const linkList = document.querySelector('ul.link-list');
   linkList.innerHTML='';
   
     for (let i=1; i<=numOfPages; i++){
  
         let button = `<li><button type="button">${i}</button></li>`;
         if (i===1){button.className='active'};
         linkList.insertAdjacentHTML('beforeend', button);
         const activate = document.querySelector('button'); 
         activate.className='active';
         linkList.addEventListener("click", (e) =>{
         
            if (e.target.tagName === 'BUTTON'){

               const deactivate = document.querySelector('.active');
               deactivate.className='';
                e.target.className='active';
               showPage(data, e.target.textContent)
            
             };

     });
    
   };

   }

//dynamically create and add search bar
const header = document.querySelector('.header'); 
header.insertAdjacentHTML('beforeend',`
<label for="search" class="student-search">
  <span>Search by name</span>
  <input id="search" placeholder="Search by name...">
  <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>
`)




//search bar functionality part

const searchButton = document.querySelector('.student-search');
const search = document.querySelector('#search');




function searchFunc(list) {
   
   const searchInput = search.value.toLowerCase();
   let searchResult=[];

   for (let i=0; i < list.length; i++){

     let fullName = `${list[i].name.first.toLowerCase()} ${list[i].name.last.toLowerCase()}`;
     
         if(searchInput !== 0 && fullName.includes(searchInput)){
            searchResult.push(list[i]);
            const ul = document.querySelector('.student-list');
         }
         if (searchResult.length===0){
            const noResult = document.querySelector('.student-list')
            noResult.innerHTML='<h1>No Results Found</h1>';
            
            
         }else{
         showPage(searchResult, 1);
         addPagination(searchResult);  };
   };
};
// click function of the search bar
searchButton.addEventListener('click', (e)=>{

   e.preventDefault();
   searchFunc(data);
});
// live letter by letter searchability of the search bar
search.addEventListener('keyup', (e)=>{
   e.preventDefault();
   searchFunc(data);
});

addPagination(data);
showPage(data, 1);
