//googleFontsChecker Object
const id = String('form#googleFontsChecker'+ ' ')
const form = {
    //html content
    inputText: document.querySelector(id + 'input[type="text"]'),
    button:document.querySelector(id + 'button[type="submit"]'),
    buttonMessage:document.querySelector(id + 'button[type="submit"] span[role="message"]'),
    loader:document.querySelector(id + 'span'),
    //messages
    messages:{
        VALIDATION_FAILED: 'Wir konnten Ihre Webseite nicht verifizieren.',
        AJAX_ERROR: "Beim übermitteln der Daten ist etwas schiefgegangen.",
        BUTTON_NORMAL: "Jetzt Überprüfen",
        BUTTON_SUCCESS: "Ihre Website enthält keine Google Fonts!",
        BUTTON_LOADING: "Wird geladen...",
        BUTTON_ERROR: "Ihre Webseite enthält Google Fonts!"
    },
    //data for ajax handler
    ajaxData:{
        type:'googleFontsChecker',
        data: String('')
    },
    response: String(''),
    //methods
    toggleState: function (state,message){
        form.button.className = String("btn btn-"+ state)
        form.buttonMessage.innerHTML = String(message)

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
    form.toggleState('secondary',form.messages.BUTTON_LOADING)
    
    //Check if input is given
    if(form.validateInput()){

        form.ajax()
        .then((response)=> {
            //write response to form
            form.response = JSON.parse(response)
            if (form.response.response === 0){
                form.toggleState('success',form.messages.BUTTON_SUCCESS)
            } else if (form.response.response == "ERROR_CANNOT_LOAD"){
                form.toggleState('danger',form.messages.VALIDATION_FAILED)
            } else {
                form.toggleState('danger',form.messages.BUTTON_ERROR)
            }

        })

    } else {
        //input is not a link
        form.toggleState('danger',form.messages.VALIDATION_FAILED)

    }
    setTimeout(() => {
        form.toggleState('primary',form.messages.BUTTON_NORMAL)
    }, 3000);
});  


