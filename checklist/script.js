const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const novaLista = document.querySelector('.list-task')

let mylist =[]

function addvalorinput(){
    mylist.push({
        tarefa: input.value,
        concluida:false
    })

    input.value = ''
    
    mostrarlista()

}

function mostrarlista() {
    
    let novaLi = ''
    mylist.forEach((newtask, local) => {
        novaLi = novaLi +`
            <li class="task ${newtask.concluida && 'done'}" >
                <img src="checked.png" alt="check_da_tarefa" onclick="concluirTarefa(${local})">
                <p>${newtask.tarefa}</p>
                <img src="trash.png" alt="Lixo_tarefa" onclick="deletItem(${local})">
            </li>
            `
    })
    novaLista.innerHTML = novaLi
    
    localStorage.setItem('lista', JSON.stringify(mylist))

}

function concluirTarefa(local){
    mylist[local].concluida = !mylist[local].concluida
    
    mostrarlista()
}

function deletItem(local){
    mylist.splice(local,1)
    
    mostrarlista() 
    
}

function recarregar(){
    const tarefalocal = localStorage.getItem('lista')

    if (tarefalocal){
       mylist = JSON.parse(tarefalocal) 
    }
    mostrarlista()
}

recarregar()
button.addEventListener('click', addvalorinput)