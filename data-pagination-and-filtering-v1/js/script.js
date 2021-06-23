/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
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



  
function addPagination(data){
 
   let numOfPages = Math.ceil(data.length / 9)
   const linkList = document.querySelector('ul.link-list');
   linkList.innerHTML='';
   
     for (let i=1; i<=numOfPages; i++){
  
         let button = `<li><button type="button">${i}</button></li>`;
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





addPagination(data);
showPage(data, 1);
