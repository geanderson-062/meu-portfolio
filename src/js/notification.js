 //colocar aviso que deve ser notificados na index

 //cookies
 if (!localStorage.Cookies) {
    document.querySelector(".box-cookies").classList.remove('hide');
}

const acceptCookies = () => {
    document.querySelector(".box-cookies").classList.add('hide');
    localStorage.setItem("nomeDoSeuCookies", "accept");
};

const btnCookies = document.querySelector(".btn-cookies");

btnCookies.addEventListener('click', acceptCookies);

//cookies fim

alert('permita a geolocalização. \n deixe ativado para total experiencia do site. \ncaso apareça um problema entre em contato.')//alerta para ativar a geolocalização

//notificação

if (window.Notification&&Notification.permission!=="denied") {

    Notification.requestPermission(function(status) {

        let n = new Notification('bem vindo', {
            body:'Entre em contato quando quiser. '
        })
        
    })
    
}