const button = document.getElementById('button')
const form = document.getElementById('form')

form.addEventListener('submit', (ev) => {
  ev.preventDefault()  
  button.addEventListener('click', (ev) =>{
    ev.preventDefault()
      
    let numberInput = 0
    numberInput++

    const buttonRegister = document.getElementById('cadastrar')
    const main = document.getElementById('content')

    const box = document.createElement('div')
    const br = document.createElement('br')
    const br1 = document.createElement('br')
    const br2 = document.createElement('br')
    const br3 = document.createElement('br')

    const labelTecnology = document.createElement('label')
    labelTecnology.innerText = 'Nome da tecnologia'
    labelTecnology.setAttribute('for','tecnology')
    labelTecnology.className = ''

    const inputTecnology = document.createElement('input')
    inputTecnology.type = 'text'
    inputTecnology.name = 'tecnology'
    inputTecnology.id = 'tecnology'
    inputTecnology.placeholder = 'Digite a tecnologia'
    inputTecnology.className = 'input-name-tec'

    const timeExp = document.createElement('label')
    timeExp.innerText = 'Tempo de experiência:'
    timeExp.setAttribute('for','input-time-exp' + numberInput) 

    const inputTimeExp1 = document.createElement('input')
    inputTimeExp1.type = 'radio'
    inputTimeExp1.name = 'input-time-exp' + numberInput
    inputTimeExp1.id ='input-time-exp' + numberInput
    inputTimeExp1.value = '0-2 anos'

    const labelTimeExp1 = document.createElement('label')
    labelTimeExp1.innerText = '0-2 anos'
    labelTimeExp1.setAttribute('for', 'input-time-exp' + numberInput)

    const inputTimeExp2 = document.createElement('input')
    inputTimeExp2.type = 'radio'
    inputTimeExp2.name = 'input-time-exp2' + numberInput
    inputTimeExp2.id ='input-time-exp2' + numberInput
    inputTimeExp2.value = '3-4 anos'
    
    const labelTimeExp2 = document.createElement('label')
    labelTimeExp2.innerText = '3-4 anos'
    labelTimeExp2.setAttribute('for', 'input-time-exp2' + numberInput)

    const inputTimeExp3 = document.createElement('input')
    inputTimeExp3.type = 'radio'
    inputTimeExp3.name = 'input-time-exp3' + numberInput
    inputTimeExp3.id ='input-time-exp3' + numberInput
    inputTimeExp3.value = '5+ anos'

    const labelTimeExp3 = document.createElement('label')
    labelTimeExp3.innerText = '5+ anos'
    labelTimeExp3.setAttribute('for', 'input-time-exp3' + numberInput)


    const remove = document.createElement('button')
    remove.innerText = 'Remover tecnologia'
    
    box.append(labelTecnology,br,inputTecnology,br1,timeExp,br2,inputTimeExp1,labelTimeExp1,inputTimeExp2,labelTimeExp2,inputTimeExp3,labelTimeExp3,br3,remove)
    form.appendChild(box)
    main.appendChild(form)

    remove.addEventListener('click', (ev) => {
      ev.preventDefault()

      form.removeChild(box)
    })

    buttonRegister.addEventListener('click', (ev) => {
      ev.preventDefault()

      const name = document.getElementById('name').value
      const nameTecnology = inputTecnology.value
      let timeTecnology = ''

      document.querySelectorAll("input[type= 'radio']:checked").forEach(function (item) {
        timeTecnology += ' - ' + item.value + '\n'
      })

      console.log({name, nameTecnology, timeTecnology})

      alert("Desenvolvedor cadastrado com sucesso" + "\nNome do desenvolvedor: " + name + "\nNome da tecnologia: " + nameTecnology + "\nTempo de experiência: " + timeTecnology)
    })
  })
})