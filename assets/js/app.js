
const addBox = document.querySelector('.add-box'),
popupBox = document.querySelector('.popup-box'),
closeIcon = popupBox.querySelector('header i'),
addBtn = popupBox.querySelector('.addBtn'),
noteTitle = popupBox.querySelector('.row input'),
noteDesc = popupBox.querySelector('.row textarea')
;
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let notes = JSON.parse(localStorage.getItem('notes') || '[]');


addBox.addEventListener('click',()=>{
    popupBox.classList.add('show');
})
closeIcon.addEventListener('click',()=>{
    popupBox.classList.remove('show');
})

function showNotes(){
    document.querySelectorAll('.note').forEach(note=>note.remove());
    
    notes.forEach((note)=>{
        let li = `<li class="note">
        <div class="details">
        <p>${note.title}</p>
        <span>${note.description}</span>
      </div>
      <div class="bottom-content">
        <span>${note.date}</span>
        <div class="settings">
          <i  onclick="showMenu(this)" class="fa-solid fa-ellipsis"></i>
          <div class="menu">
            <span><i class="fa-regular fa-pen-to-square"></i>Edit</span>
            <span><i class="fa-solid fa-trash"></i>Delete</span>
          </div>
        </div>
      </div>
      </li>
        `;
        addBox.insertAdjacentHTML('afterend',li);
    })
}
function showMenu(any){
    any.parentElement.classList.add('show');
    document.addEventListener('click', e => {
        if(e.target.tagName != 'I' || e.target != any){
            any.parentElement.classList.remove('show');
        }
    })
}

addBtn.addEventListener('click',()=>{
    if(noteTitle.value || noteDesc.value){
        let dateObj = new Date;
        let day = dateObj.getDate();
        let month = months[dateObj.getMonth()];
        let year = dateObj.getFullYear();
        
        let noteInfo = {
            title : noteTitle.value, description: noteDesc.value, date:`${day} ${month} ${year}`
        }
        
        notes.push(noteInfo);
        localStorage.setItem('notes', JSON.stringify(notes));
        closeIcon.click();
        showNotes();
    }    
})
showNotes();