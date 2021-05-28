/* 
    Javascripts motorer
    ---------------------------------------------------
    Chrome, Edge (new), Opera   =   V8 - Chromium    
    FireFox                     =   Spider Monkey
    Safari                      =   Javascript Core
    IE, Edge (old)              =   Chakra


    Scriptspråk                     Programmeringsspråk
    Körs i en runtime miljö         Kompileras (körbar fil .exe)
    --------------------------------------------------------------
    Javascript                      Java
    PowerShell                      C#/F#/J#
    R/S                             C/C++
    (Python)                        (Python)
    Batch
    BAT


    Datatyper
    --------------------------------------------------------------
    String          texter                          "" '' ``
    Number          Heltal, decimaltal              1 1.1
    Boolean         sant/falsk                      true/false
    Object          Objekt, Array, null             {} [] null
    Undefined       ospecificerad                   undefined
    (Symbol)


    Deklarering av variabler (camelCase)
    ------------------------------------------------------------------
    PRE ES6:        variabelNamn,  var variabelNamn

    global scope - kan skrivas över oavsett vart det än är
    function scope - kan bara skrivas över inom en funktion

    POST ES6:       let variabelNamn, const variabelNamn
    block scope - kan bara deklareras en gång och const är konstant
    function scope - kan bara skrivas över inom en funktion


    Placeholder
    ------------------------------------------------------------------
    let firstName = 'Hans'
    let lastName = "Mattin-Lassei"
    
    let fullName = "Mitt namn är " + firstName + " " + lastName + ".";
    let fullName = 'Mitt namn är ' + firstName + ' ' + lastName + '.';
    let fullName = `Mitt namn är ${firstName} ${lastName}.`

    let baseUrl = 'https://net21-1-fa.azurewebsites.net/api/'
    let id = 'd0f0cd4f-1f00-4e6e-8281-007cd2df5028'
    let apiUrl = `${baseUrl}/products/${id}`


    Object
    -----------------------------------------------------------------------------------------
    this = refererar till sig själv. Dvs "för att hitta ditt efternamn kolla på dig själv"

    JSON:  let json   =  "{ "id": "d0f0cd4f", "firstName": "Hans", "lastName": "Mattin-Lassei" }"
    JS     let person =  { "id": 'd0f0cd4f', 'firstName': "Hans", lastName: `Mattin-Lassei`, fullName() { return `${this.firstName} ${this.lastName}`} }

        
        JSON
        -----------------------------------------------------------------------------------------
        let person = { id: 'd0f0cd4f', firstName: 'Hans', lastName: 'Mattin-Lassei' }

        let json = JSON.stringify(person)   =>  "{ "id": "d0f0cd4f", "firstName": "Hans", "lastName": "Mattin-Lassei" }
        let person = JSON.parse(json)       =>  { id: "d0f0cd4f", firstName: "Hans", lastName: "Mattin-Lassei" }


    Funktioner
    ---------------------------------------------------------------------------------------------
    PRE ES6:
        function doSomething() {
            ...
        }

        function getFullName() {
            return 'Hans Mattin-Lassei'
        }

        function getFullName(firstName, lastName) {
            return `${firstName} ${lastName}`
        }



    POST ES6:
        const doSomething = () => {
            ...
        }

        const getFullName = () => {
            return 'Hans Mattin-Lassei'
        }

        const getFullName = (firstName, lastName) => {
            return `${firstName} ${lastName}`
        }


    EXEMPEL:
    const setFullName = (firstName, lastName) => {
        console.log('Refererar till en variabel utanför')
        fullName = `${firstName} ${lastName}`
    }

    const setFullName = (firstName, lastName) => {
        console.log('retunerar ett värde som vi sen kan sätta utanför')
        return `${firstName} ${lastName}`
    }


    let fullName = ''
    setFullName('Hans', 'Mattin-Lassei')
    fullName = setFullName('Hans', 'Mattin-Lassei')



    CALLBACK Functions
    -------------------------------------------------------------------------------------------------
    function sendMessage(payload, callback) {
        const res = axios.post('https://apiurl.com/api/products')
        if(res.status === 200)
            callback(res.data)
    }

        EXEMPEL
        function sendMessage(payload, callback) {

            const response = fetch('https://net21-1-fa.azurewebsites.net/api/products', { method: 'post', body: payload })

            let error = ''
            let result = ''

            if(response.status === 200) 
                result = response.data
            else
                error = 'Något gick fel'

            callback(error, result)
        }

        sendMessage('en text', function(error, data) {
            console.log(error)
            console.log(data)
        })

    STATUS CODE: 200 OK, 201 CREATED, 400 BAD REQUEST, 403 Unauthorized, 404 Not Found



    CLASSES
    -------------------------------------------------------------------------------------------------------------
    Klasser är som objekt fast det är en mall av ett objekt istället för att jag ska behöva
    skriva samma sak flera gånger om

    Utan klass:
        let user1 = { id: 1, firstName: 'Hans', lastName: 'Mattin-Lassei'}
        let user2 = { id: 2, firstName: 'Tommy', lastName: 'Mattin-Lassei'}
    
    Med klass:
        class Person {
            constructor(firstName, lastName) {
                this.firstName = firstName
                this.lastName = lastName
            }
        }

        let user1 = new Person('Hans', 'Mattin-Lassei')
        let user2 = new Person('Tommy', 'Mattin-Lassei')



        OPERATIONER
        -------------------------------------------------------------------------------------------------------
        ==              lika med värde
        ===             lika med värde och datatyp
        !=              inte lika med värde
        !==             inte lika med värde och datatype
        <               mindre än
        >               större än
        <=              mindre eller lika med
        >=              större eller lika med
        !               motsatsen till (true/false)
        &&              och
        ||              eller
        +=              lägg till på befintligt värde
        -=              ta bort från befintligt värde
        ++              öka med ett
        --              minska med ett

        if, switch, for-loop, for (foreach), while ...


            if-sats
            -------------------------------------------------------------
            if(statement)
            if(statement) { }
            if(statement) { } else { }
            if(statement) { } else if(statement) { } else { }
            
            (statement) ? true-delen : false-delen


            switch
            -------------------------------------------------------------
            switch(value) {
                case 'likamedtexten':
                    ...
                    break;
                case 'likamedtexten':
                    ...
                    break;
                default:
                    break;
            }


            for-loop
            -------------------------------------------------------------
            ex. condition:  i < array.length
            ex. condition:  i <= 10
            
            for(let i=0; condition; i++) { }
            for(let i=0; condition; i--) { }


            for (foreach)
            --------------------------------------------------------------
            let array = ['Hans','Tommy','Joakim']

            for(let name of array)
                console.log(name)


            while-loop
            ---------------------------------------------------------------
            var försiktig kan bli en evighetsloop och då kraschar systemet

            while(condition) {
                ...
            }
            
            do {
                ...
            } while(condition)

            ex.
                let count = 0
                while(count < 10) {
                    console.log(count)
                    count++
                }


                while(true) {
                    if(WiFi.status() == WL_CONNECTED)
                        break;
                    
                    delay(1000);
                }

                do {
                    WiFi.begin(ssid, password);
                    delay(1000);
                } while(WiFi.status() != WL_CONNECTED)
*/