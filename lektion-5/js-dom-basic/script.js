/* DOM - Document Object Model */

// hämta data från vår input som heter name
// var name = document.getElementById('firstName').value
// var names = document.getElementsByTagName('input')[0].value
// var names = document.getElementsByName('firstName')[0].value
// var names = document.getElementsByClassName('input-class')[1].value

// var name =  document.querySelector('input').value
// var names = document.querySelectorAll('input')

// console.log(name)
// console.log(names)

// var resultElement = document.getElementById('result') 
// resultElement.innerText = 'Här är resultatet'
// resultElement.innerHTML = '<h5>Här är resultatet</h5>'




/* EVENTS */

// const names = [] 

// document.getElementById('submitBtn').addEventListener('click', function() {
//     let firstName = document.getElementById('firstName')
//     let lastName  = document.getElementById('lastName')
//     let result  = document.getElementById('result')

//     let fullName = `${firstName.value} ${lastName.value}`  
//     names.push(fullName)

//     result.innerHTML = ''

//     for(let name of names)
//         result.innerHTML += `<p>${name}</p>`

//     firstName.value = ''
//     lastName.value = ''
// })


/* contact form example */

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault()

    // let name = document.getElementById('name').value
    // let message = document.getElementById('message').value
    let name = e.target['name']
    let message = e.target['message']

    if(name.value !== '' && message.value !== '') {
        name.classList.remove('invalid')
        message.classList.remove('invalid')

        const json = JSON.stringify({
            name: name.value,
            message: message.value
        })

        console.log(`Formulär skickat med datat: ${json}`)
    }
    else {
        name.classList.add('invalid')
        message.classList.add('invalid')
    }
})