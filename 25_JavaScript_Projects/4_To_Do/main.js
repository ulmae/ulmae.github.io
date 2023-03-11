const list = document.getElementById('list');
const newItem = document.getElementById('newItem');
const toDo = [];

newItem.addEventListener("keypress", function(event){
    if (event.key === "Enter"&&newItem.value!='') {
        addNew();
      }
})

function addNew() {
    var toDos='';
    toDo.push(newItem.value);
    newItem.value = '';
    toDo.forEach((item,i)=>toDos=`${toDos}<li onclick="crossOff('item-${i+1}')" id="item-${i+1}" ondblclick="remove('item-${i+1}',${i})">${toDo[i]}</li>`);
    const lines = document.getElementsByClassName('lines')[0];
    const newHeight = lines.offsetHeight+45;
    console.log(`height: ${newHeight}`)
    lines.style.height = newHeight.toString()+"px";
    list.innerHTML = toDos;
    console.log(toDo);
}

function crossOff(id) {
    const element = document.getElementById(id);
    element.classList.toggle('done');

}

function remove(id,index) {
    var toDos='';
    toDo.splice(index,1);
    newItem.value = '';
    toDo.forEach((item,i)=>toDos=`${toDos}<li onclick="crossOff('item-${i+1}')" id="item-${i+1}" ondblclick="remove('item-${i+1}',${i})">${toDo[i]}</li>`);
    const lines = document.getElementsByClassName('lines')[0];
    const newHeight = lines.offsetHeight-45;
    lines.style.height = newHeight.toString()+"px";
    list.innerHTML = toDos;
    console.log('remove')
}