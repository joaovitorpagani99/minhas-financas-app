import LocalStorageService from "./localStorageService";
import localStorageService from "./localStorageService"

export const USUARIO_LOGADO = '_usuario_logado'

export default class AuthService{

    static isUsuarioAutentiacado(){
        const usuario = localStorageService.obterItem('_usuario_logado')
        return usuario && usuario.id;
    }

    static removerUsuarioAutenticado(){
        LocalStorageService.removerItem('_usuario_logado')
    }

    static removerUsuarioAutenticado(){
        LocalStorageService.removerItem(USUARIO_LOGADO)
    }

    static logar(usuario){
        LocalStorageService.adicionarItem(USUARIO_LOGADO, usuario)
    }

    static obterUsuarioAutenticado(){
        return LocalStorageService.obterItem(USUARIO_LOGADO);
    }
}