import React from 'react'

export default props => (
    <nav className="shadow-custom navbar navbar-expand-md navbar-dark fixed-top text-uppercase navbar-custom bg-color-custom">
        <a className="navbar-brand" href="#welcome-home"><i className="fa fa-chevron-right"></i></a>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#about-me">Sobre mim <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#habilidades">Habilidades</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#experiencias">Minhas Experiências </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#meus-projetos">Projetos </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#depoimentos">Depoimentos </a>
                </li>
            </ul>
        </div>
        <button className="btn btn-outline-success" type="button" data-toggle="modal" data-target="#formulario" >VAMOS CONVERSAR</button>
    </nav>
)