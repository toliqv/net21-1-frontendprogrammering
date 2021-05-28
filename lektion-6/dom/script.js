/* 
    Processa formulärdata:
    -------------------------------------------------
    Kan inte göras med html eller css

    vi kan använda oss av:
    (.asp, .aspx, .razor, .cshtml) = C#     => server side
    .php                                    => server side
    .js                                     => client side


    HTTP METHODS
    GET     =   Hämta
    POST    =   Skicka
    
    PUT     =   Ersätt
    PATCH   =   Uppdatera
    DELETE  =   Ta bort

    GET:
    http://127.0.0.1:5500/dom/index.html?
    http://127.0.0.1:5500/dom/index.html?firstName=
    http://127.0.0.1:5500/dom/index.html?firstName=hans
    http://127.0.0.1:5500/dom/index.html?username=hansml&password=BytMig123



    POST:
    action=""               -> http://127.0.0.1:5500/dom/index.html
    action="submitform.php" -> http://127.0.0.1:5500/dom/submitform.php

*/

const validateLength = (element, name, min = 2, max = 32) => {
    if (element.length === 0)
        console.log(`Du måste ange ett giltigt ${name}.`)

    else if (element.length < min || element.length > max)
        console.log(`${name}et måste vara mellan ${min}-${max} tecken långt.`)
}

const validateName = (event) => {
    const regex = /^[a-zA-Z]{2,}$/;
    if(!regex.test(event.target.value.trim()))
        document.getElementById(`${event.target.id}Error`).innerText = `Du måste ange ett giltigt ${event.target.placeholder.toLowerCase()}`
    else
    document.getElementById(`${event.target.id}Error`).innerText = ''
}

const validatePassword = (element) => {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return regex.test(element)
}

const validateEmail = (element) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(element)
}


const submitRegForm = (event) => {
    event.preventDefault()

    // const username = event.target['username'].value.trim()
    // const password = event.target['password'].value.trim()
    // const confirmPassword = event.target['confirmPassword'].value.trim()
    // const postalCode = event.target['postalCode'].value.trim()
    // const email = event.target['email'].value.trim()
    const firstName = event.target['firstName'].value.trim()

    for(let element of event.target) {
        console.log(element)

        switch(element.type) {
            case "text":
                console.log('är en text');
                break;
            case "password":
                console.log('är ett lösenord')
                break;
            case "email":
                console.log('är en epostadress')

        }
    }
}