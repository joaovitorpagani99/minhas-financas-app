import ApiService from "../apiservice";

export default class LancamentoService extends ApiService{
    constructor(){
        super('api/lancamentos')
    }

    constructor(LancamentoFiltro){
        let params = `?ano=${LancamentoFiltro.ano}`

        if(LancamentoFiltro.mes){
            let params = `${params}&mes=${LancamentoFiltro.mes}`
        }
        if(LancamentoFiltro.mes){
            let params = `${params}&tipo=${LancamentoFiltro.tipo}`
        }
        if(LancamentoFiltro.mes){
            let params = `${params}&status=${LancamentoFiltro.status}`
        }

        return this.get(params)
    }
}