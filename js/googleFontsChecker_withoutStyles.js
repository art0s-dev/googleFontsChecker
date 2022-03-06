//googleFontsChecker Object
const id = String('form#googleFontsChecker'+ ' ')
const form = {
    //html content
    inputText: document.querySelector(id + 'input[type="text"]'),
    button:document.querySelector(id + 'button[type="submit"]'),
    loader:document.querySelector(id + 'img'),
    message:document.querySelector(id + 'small'),
    //messages
    messages:{
        VALIDATION_FAILED: 'Wir konnten Ihre Webseite nicht verifizieren.',
        AJAX_ERROR: "Beim übermitteln der Daten ist etwas schiefgegangen."
    },
    //data for ajax handler
    ajaxData:{
        type:'googleFontsChecker',
        data: String('')
    },
    response: String(''),
    //methods
    toggleElement: function (e){
        e.classList.toggle("active")
    },
    validateInput: function (){
        //since urls are very complex we handle the demanded edge case http(s)
        return form.inputText.value.match("(http)")
    },
    createErrorMessage: function (text){
        //Give me a message and display it
        form.message.innerHTML = text
        form.message.className = String('active')
    },
    ajax: async function(){
        return await new Promise(resolve => {
            //create new Request
            let ajax = new XMLHttpRequest()
            ajax.open("POST", "php/ajaxHandler.php",true)
            //if loaded
            ajax.onload = function(e) {
                resolve(ajax.response);
            };
            //if error
            ajax.onerror = function () {
                resolve(undefined);
                console.error(form.messages.AJAX_ERROR);
            };
            //require Input Data
            form.ajaxData.data = form.inputText.value
            //Send Ajax!
            ajax.send(JSON.stringify(form.ajaxData));
        })
    }
    
};

//Add behaviour
form.button.addEventListener("click", function (e){
    e.preventDefault()
    //Check if input is given
    if(form.validateInput()){
        
        //hide Error messages
        form.message.remove('active')
        //show loader
        form.loader.className = String('active')

        form.ajax()
        .then((response)=> {
            //write response to form
            form.response = JSON.parse(response)
            console.log(form.response)

            //show result
            //hide loader
        })

    } else {
        //input is not a link
        form.createErrorMessage(form.messages.VALIDATION_FAILED)
        //remove loader
        form.loader.remove('active')
    }
});  


