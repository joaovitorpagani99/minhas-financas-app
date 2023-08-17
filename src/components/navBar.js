import React from "react";
import NavbarItem from './navBarItem'

function NavBar() {
    return (
        <div classname="navbar navbar-expand-lg fixed-top navbar-dark bg-primary" >
            <div classname="container">
                <a href="https://bootswatch.com/" classname="navbar-brand">Minhas Finanças</a>
                <button classname="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarResponsive" 
                        aria-controls="navbarResponsive" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span classname="navbar-toggler-icon"></span>
                </button>
                <div classname="collapse navbar-collapse" 
                                id="navbarResponsive">
                    <ul classname="navbar-nav">
                        <NavbarItem href="#/home" label="Home" />
                        <NavbarItem href="#/cadastro-usuarios" label="Cadastro Usuarios" />
                        <NavbarItem href="#/usuarios" label="Usuarios" />
                        <NavbarItem href="#/lancamentos" label="Lançamentos" />
                        <NavbarItem href="#/login" label="Login" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar