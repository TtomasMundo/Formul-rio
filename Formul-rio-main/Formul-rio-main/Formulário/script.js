function ValidadeForm(){
    var fname = document.getElementByid('fname').value.trim();
    var email = document.getElementByid('email').value.trim();
    var message = document.getElementByid('message').value.trim();

    if(fname === ''){
        alert('Preencha o campo nome!')
        return false;
    }
    if(email === ''){
        alert('Preencha o campo E-mail!')
        return false;
    } if(message === ''){
        alert('Preencha o campo Mensagem!')
        return false;
    }
    return true;
}
