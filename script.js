const notesWrapper = document.querySelector('#notes-wrapper');
const closeIcon = document.querySelector("#closeIcon");
const addCloseIcon = document.querySelector("#add-closeIcon");
const panel = document.querySelector('#window');
const addPanel = document.querySelector('#add-window');
// const windowText = panel.querySelector('.window-text') ;
const deleteBtn = panel.querySelector('.deleteBtn');
const addBtn = document.getElementById('add-icon');
const addForm = document.getElementById('add-form');
const newInput = document.getElementById("text-area");
const submitBtn = document.getElementById('#submitBtn');


// adding funcionality to the close icon 


closeIcon.addEventListener('click',function(e){
  
  panel.style.display = 'none';
})






// addin notes 
addBtn.addEventListener('click' , function(e){
  addPanel.style.display = 'flex' ;
  notesWrapper.querySelectorAll('div').forEach(div => {
    div.classList.remove('active')
  })
})

// close button for add window 

addCloseIcon.addEventListener('click',function(e){
  
  addPanel.style.display = 'none';
})

// creating new notes 

addForm.addEventListener('submit' , function(e){
  e.preventDefault();
  const newValue = newInput.value ;
  const newNote = document.createElement('div');
  newNote.className = 'note';
  

  const newText = document.createElement('p');
  newText.className = 'text' ;

  newText.textContent = newValue ;

  newNote.appendChild(newText);
  notesWrapper.appendChild(newNote);
  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'delete'
  deleteBtn.classList.add('delete-button')
  deleteBtn.addEventListener('click' , function(e){
    const delete_button_parent = deleteBtn.parentElement
    notesWrapper.removeChild(delete_button_parent)
})

  newNote.appendChild(deleteBtn)

  addPanel.style.display = 'none';
  addingPopUpClickEvent(newNote);

})
// adding pop-up functionalities to notes

function addingPopUpClickEvent(item) {
 item.addEventListener('click' , e => {
  if(e.target.classList.contains('text')){
    e.target = e.target.parentElement()
  }
  const note = e.target
 
 if(!note.classList.contains('active')){
  notesWrapper.querySelectorAll('div').forEach(div => {
    div.classList.remove('active')
  })


  note.classList.add('active')
 }
 else{
  note.classList.remove('active')
 }

  
 
    
  })
}


// deleting notes


