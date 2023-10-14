function create_item(){
    my_todo = document.getElementById('my_todo').value
    list_item = document.createElement('li')
    list_item.innerText = my_todo
    document.getElementById('my_ul').appendChild(list_item)
    checkbox = document.createElement('input')
    document.getElementById('my_todo').value = ''
}