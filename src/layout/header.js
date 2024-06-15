import "../stylehead.css"

import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header className="text-white py-3" style={{ backgroundColor: '#97CADB' }}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-2 text-center">
                        <div style={{ backgroundColor: '#02457A', padding: '5px', borderRadius: '50%', width: '50px', height: '50px' }}>
                            <img src="https://i.imgur.com/dFku6Qa.png" alt="Logo" className="img-fluid" />
                        </div>
                    </div>

                <div className="col-md-4">
                    <Link to="/productos">
                        <button className="btn btn-block" style={{ backgroundColor: '#02457A', color: 'white' }}>Productos</button>
                    </Link>
                </div>
                    <div className="text-center col-md-4 ">
                        <div className="d-flex justify-content-center">
                            <input type="text" className="form-control" style={{ maxWidth: '150px' }} />
                        </div>
                    </div>
                    <div className="col-md-2 text-center">
                    <Link to="/descuentos">
                        <button className="btn" style={{ backgroundColor: '#02457A', color: 'white' }}>Descuentos</button>
                    </Link>
                        <button className="btn" style={{ backgroundColor: '#02457A', color: 'white' }}>+</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;