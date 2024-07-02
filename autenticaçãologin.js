function logar(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(email == "patrick@seven.com.br" && senha == "123456"){
        location.href = "todolist.html";
    } else{
       alert ('E-mail e senha incorretos')}
}