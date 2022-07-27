const form = document.getElementById('form');
const userlist = document.getElementById('user-list');
const all=document.getElementById('all');
const clear=document.getElementById('clear');
const count=document.getElementById('count');
const users = [];



form.addEventListener('submit', function (event) {
    event.preventDefault();
    const { name } = form.elements;
    users.push({
        todoname: name.value

    })
    display(users);
    countspan(users);
});



userlist.addEventListener('click', function (event) {
    if (event.target.tagName === 'INPUT') {
        const checkbox = event.target;
        const text = checkbox.nextElementSibling;
        text.style.textDecoration = 'line-through';
    }
})




function display(users) {
    index=0;
    let HTML = '';
    for (let user of users) {
        HTML = HTML + `<li id="${index}" class="list-group-item">
    
        <input class="form-check-input mt-0" type="radio" >
      
      
        <span>${user.todoname}</span>
        
        </li> 
        
        
      
        `;


index++;

    }
    userlist.innerHTML = HTML;
}

function countspan(users){
    count.textContent=users.length;
    
}


clear.addEventListener('click',function(event){
 
    const index=Number(event.target.parentElement.id);
    users.splice(index,1);
    display(users);
    countspan(users);

});