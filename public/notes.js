console.log('Welcome to my Notes App')
showNotes();
document.getElementById('noteBtn').addEventListener('click',function(){
    txt = document.getElementById('noteTxt')
    notes = localStorage.getItem('notes')
    notesObj = JSON.parse(notes)
    if(notesObj == null){
        notesObj = [txt.value]
    }
    else{
        notesObj.push(txt.value)
    }
    localStorage.setItem('notes',JSON.stringify(notesObj))
    // console.log(notesObj)
    txt.value = ''
    showNotes();
})

function showNotes() {
    content = '';
    notes = localStorage.getItem('notes')
    notesObj = JSON.parse(notes)
    if(notesObj == null || notesObj.length == 0){
        content += `<h4>Nothing to show here! Use "Add a Note" section above to add a note!</h4>`
    }
    else{
        Array.from(notesObj).forEach(function(elements,index) {
        content += `<div class="card my-2 mx-2 hidshow" id="note-${index+1}" style="width: 14rem;">
                <div class="card-body">
                    <h5 class="card-title">Note-${index+1}</h5>
                    <p class="card-text">${elements}</p>
                    <button onclick=delItem(${index}) class="btn btn-primary" id="noteDel">Delete Note</button>
                </div> 
                  </div>`
    })
}
    document.getElementById('notes').innerHTML = content;
}

function delItem(index) {
    notes = localStorage.getItem('notes')
    notesObj = JSON.parse(notes)
    notesObj.splice(index,1);
    // console.log(notesObj)
    localStorage.setItem('notes',JSON.stringify(notesObj))
    showNotes();
}

search = document.getElementById('noteSearch')
search.addEventListener('input',function() {
    block = document.querySelectorAll('div.hidshow')
    Array.from(block).forEach(function(element,index) {
        cardTxt = document.getElementsByTagName('p')[index].innerText.toLowerCase();
        if(cardTxt.includes(search.value.toLowerCase())){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';           
        }
    })
    
})