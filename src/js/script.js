const button = document.getElementById('button')
const form = document.getElementById('form')
const violetDark = '#7214ff'
const white = '#fff'
const whiteGrey = '#dedede'
const violetLosted = '#605695'
const buttonRegister = document.getElementById('cadastrar')
buttonRegister.style.display = 'none'

form.addEventListener('submit', (event) => {
  event.preventDefault()
    
  button.addEventListener('click', (event) =>{
    event.preventDefault()
      
    let inputCounter = 0
    inputCounter++

    const main = document.getElementById('content')

    const box = document.createElement('div')
    const br = document.createElement('br')
    const br1 = document.createElement('br')
    const br2 = document.createElement('br')
    const br3 = document.createElement('br')

    const labelTecnology = document.createElement('label')
    labelTecnology.innerText = 'Nome da tecnologia'
    labelTecnology.setAttribute('for','tecnology')

    const inputTecnology = document.createElement('input')
    inputTecnology.type = 'text'
    inputTecnology.name = 'tecnology'
    inputTecnology.id = 'tecnology'
    inputTecnology.placeholder = 'Digite a tecnologia'
    inputTecnology.className = 'input-name-tec'
    inputTecnology.style.marginBottom = '1rem'

    const timeExp = document.createElement('label')
    timeExp.innerText = 'Tempo de experiência'
    timeExp.setAttribute('for','input-time-exp' + inputCounter) 
    timeExp.style.marginBottom = '1rem'

    const inputTimeExp1 = document.createElement('input')
    inputTimeExp1.type = 'radio'
    inputTimeExp1.name = 'input-time-exp' + inputCounter
    inputTimeExp1.id ='input-time-exp' + inputCounter
    inputTimeExp1.value = '0-2 anos'

    const labelTimeExp1 = document.createElement('label')
    labelTimeExp1.innerText = '0-2 anos'
    labelTimeExp1.setAttribute('for', 'input-time-exp' + inputCounter)

    const inputTimeExp2 = document.createElement('input')
    inputTimeExp2.type = 'radio'
    inputTimeExp2.name = 'input-time-exp2' + inputCounter
    inputTimeExp2.id ='input-time-exp2' + inputCounter
    inputTimeExp2.value = '3-4 anos'
    
    const labelTimeExp2 = document.createElement('label')
    labelTimeExp2.innerText = '3-4 anos'
    labelTimeExp2.setAttribute('for', 'input-time-exp2' + inputCounter)

    const inputTimeExp3 = document.createElement('input')
    inputTimeExp3.type = 'radio'
    inputTimeExp3.name = 'input-time-exp3' + inputCounter
    inputTimeExp3.id ='input-time-exp3' + inputCounter
    inputTimeExp3.value = '5+ anos'

    const labelTimeExp3 = document.createElement('label')
    labelTimeExp3.innerText = '5+ anos'
    labelTimeExp3.setAttribute('for', 'input-time-exp3' + inputCounter)

    const remove = document.createElement('button')
    remove.innerText = 'Remover tecnologia'
    
    remove.style.padding = '10px 10px'
    remove.style.backgroundColor = whiteGrey
    remove.style.fontSize = '15px'
    remove.style.border = '1px solid'
    remove.style.borderColor = violetLosted
    remove.style.borderRadius = '10px'
    remove.style.fontWeight = 'bold'
    remove.style.color = violetDark
    remove.style.marginTop = '1rem'

    const buttonSpace2 = document.getElementById('button-space2')
    const name = document.getElementById('name')
    name.style.marginBottom = '1px'
    
box.append(labelTecnology,br,inputTecnology,br1,timeExp,br2,inputTimeExp1,labelTimeExp1,inputTimeExp2,labelTimeExp2,inputTimeExp3,labelTimeExp3,br3,remove, button)
    
    form.appendChild(box)

    remove.addEventListener('click', (ev) => {
      ev.preventDefault()
      form.removeChild(box)
    })
    
    buttonSpace2.style.display = 'flex'
    buttonSpace2.style.justifyContent = 'right'
    buttonSpace2.style.alignItems = 'center'
    
    box.appendChild(buttonRegister)
    buttonRegister.style.display = 'block'
    buttonRegister.style.padding = '12px 12px'
    buttonRegister.style.backgroundColor = violetDark
    buttonRegister.style.color = white
    buttonRegister.style.border = 'none'
    buttonRegister.style.borderRadius = '10px'
    buttonRegister.style.cursor = 'pointer'
    buttonRegister.style.marginTop = '1em'
    buttonRegister.style.fontSize = '17px'
    
    buttonRegister.addEventListener('click', (ev) => {
      ev.preventDefault()

      const name = document.getElementById('name').value
      const nameTecnology = inputTecnology.value
      let timeTecnology = ''

      document.querySelectorAll("input[type= 'radio']:checked").forEach(function (item) {
        timeTecnology += ' ' + item.value + '\n'
      })

      console.log({name, nameTecnology, timeTecnology})

      alert("Desenvolvedor cadastrado com sucesso!" + "\n\nNome do desenvolvedor: " + name + "\nNome da tecnologia: " + nameTecnology + "\nTempo de experiência: " + timeTecnology)
    })
  })
})