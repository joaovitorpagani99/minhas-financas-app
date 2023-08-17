import React from "react";
import { Route, Switch, HashRouter } from 'react-router-dom'
import Login from "../Views/login";
import CadastroUsuario from "../Views/cadastroUsuario";
import home from "../Views/home";
import consultaLancamentos from "../Views/lancamentos/consultaLancamentos";

function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/home" component={home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro-usuarios" component={CadastroUsuario} />
                <Route exact path="/consulta-lancamentos" component={consultaLancamentos} />
            </Switch>
        </HashRouter>
    )
}
export default Rotas