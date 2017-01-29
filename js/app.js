 $(document).ready(function() {
     firebase.initializeApp(config);
 })


function animaScrollMenu(element) {
    $('html, body').animate({
        scrollTop: $(element).offset().top
    }, 2000);
}

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDfkUulQ-fIkelA2Kqo1gwX_Hl13pIsaVc",
    authDomain: "site-academycus.firebaseapp.com",
    databaseURL: "https://site-academycus.firebaseio.com",
    storageBucket: "site-academycus.appspot.com",
    messagingSenderId: "273675526718"
  };
 
function isEmail(email){
  if( email=="" 
    || email.indexOf('@')==-1 
        || email.indexOf('.')==-1 )
    {
        return false;
    }
    return true;
}

  function enviarMensagem() {

    var nome = $('#nome-contato').val();
    var email = $('#email-contato').val();
    var assunto = $('#assunto-contato').val();
    var mensagem = $('#mensagem-contato').val();

    if (nome != '' && email != '' && assunto != '' && mensagem != '' && isEmail(email))
    {
        firebase.auth().signInAnonymously().then(function() {
            firebase.database().ref('emails/').push({
                name: nome,
                email: email,
                assunto: assunto,
                mensagem: mensagem
            }).then(function(){
                swal("Mensagem enviada!", "Entraremos em contato o mais breve possível!", "success")
            });
        });
    }else {
        sweetAlert("Oops...", "e-mail inválido!", "error");
    }
  }

  function cadastrarNewsLetter() {
    if(isEmail($("#email-news").val())) {
        firebase.auth().signInAnonymously().then(function() {
            firebase.database().ref('newsletter/').push({
                email: "rafaelniltonwd@hotmail.com"
            }).then(function(){
                swal("Cadastro realizado!", "", "success")
            });
        });
    } else {
        sweetAlert("Oops...", "e-mail inválido!", "error");
    }
  }

  function acessarCrowdFunding() {
      firebase.auth().signInAnonymously().then(function() {
            firebase.database().ref('acessos/').push({
                data: new Date().toLocaleDateString(),
                hora: new Date().toLocaleTimeString()
            })
        });
  }
