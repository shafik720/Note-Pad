
const addBox = document.querySelector('.add-box'),
popupBox = document.querySelector('.popup-box'),
closeIcon = document.querySelector('.content header i')
;

addBox.addEventListener('click',()=>{
    popupBox.classList.add('show');
})
closeIcon.addEventListener('click',()=>{
    popupBox.classList.remove('show');
})