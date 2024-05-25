import "../style.css"
import { Link } from "react-router-dom";

const Header = () => {
    return <header>
        <div className="primary">
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <h1 className="text-center"> PAGINA DE SANTI</h1>
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid ">
                            <a className="navbar-brand primary" href="#">Pag1</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active primary" aria-current="page" href="#">PagPrincipal</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link primary" href="#">EnlacesExternos</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle primary" href="#" role="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Ver mas
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item primary" href="#">Action</a></li>
                                            <li><a className="dropdown-item primary" href="#">Another action</a></li>
                                            <li>
                                                <hr className="dropdown-divider"></hr>
                                            </li>
                                            <li><a className="dropdown-item primary" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled primary" aria-disabled="true">Desconectar</a>
                                    </li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                    <button className="btn btn-primary">
                                        <i data-feather="send"></i>
                                        Enviar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </nav>
        </div>
    </header>;
}

export default Header;