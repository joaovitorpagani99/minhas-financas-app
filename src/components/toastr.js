import toastr from 'toastr'

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

  export function mostrarMessagem(titulo, mensagem, tipo){
    toastr[tipo](mensagem, titulo)
  }

  export function mensagemErro(mensagem){
    mostrarMessagem('Erro', mensagem, 'error')
  }

  export function mensagemSucesso(mensagem){
    mostrarMessagem('Sucesso', mensagem, 'success')
  }

  export function mensagemAlerta(mensagem){
    mostrarMessagem('Alerta', mensagem, 'warning')
  }