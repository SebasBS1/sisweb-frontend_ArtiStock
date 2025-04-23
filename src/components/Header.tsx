import { Link } from "react-router";
import logo from "../media/logo_ph.png";
import imgSearch from "../media/search.svg";
import imgBag from "../media/bag.svg";
import imgProfile from "../media/perfil.png";

function Header(){
    return (
        <>
            <header className="sticky-top">
                <div className="container-fluid">
                <div id="header_bar" className="row d-flex align-items-center justify-content-between w-100 top-0 start-0 gx-0">
                    <div id="logo" className="col-md-2 d-flex justify-content-center"> 
                        <img src={logo} alt="Logo" className="img-fluid" />
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="row">
                            <div className="col-12 header_center d-flex justify-content-center w-100">
                                <div className="searchbar d-flex rounded-pill w-50">
                                    <input type="text" placeholder="Buscar Productos" className="text-white form-control bg-transparent border-0" />
                                    <button type="submit" className="btn btn-link">
                                        <img src={imgSearch} alt="Buscar" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <nav className="navbar navbar-expand col-12">
                                <div className="container justify-content-center">
                                    <ul className="navbar-nav">
                                        <li className="nav-item active mx-3">
                                            <Link to="/users" className="nav-link text-dark"> Artistas</Link>
                                        </li>
                                        <li className="nav-item active mx-3">
                                            <Link to="/products" className="nav-link text-dark text-center">Mis Productos</Link>
                                        </li>
                                        <li className="nav-item active mx-3">
                                            <Link to="#" className="nav-link text-dark">Promociones</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="header_right col-md-2 d-flex justify-content-center">
                        <Link to="#" id="Lista de Compras"><img src={imgBag} alt="Icono de Compras" className="mx-3 pt-2" width={50} /></Link>
                        <Link to="/users/:id" id="perfil"><img src={imgProfile} alt="Icono de Perfil" className="img-fluid" style={{maxWidth: 75}} /></Link>
                    </div>
                </div>
                </div>
            </header>
        </>
    );
}

export default Header;