import "../styles.css";
import { Link } from 'react-router-dom';

const feather = require('feather-icons');
feather.replace();
 setTimeout(()=>{
    feather.replace();
 }, 500)
const Header = () => {
    return   <header class="text-white py-3" style="background-color: #97CADB;">
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col-md-2 text-center">
                <div style="background-color: #02457A; padding: 5px; border-radius: 50%; width: 50px; height: 50px;">
                    <img src="logo1.png" alt="Logo" class="img-fluid"></img>
                </div>
            </div>

            <div className="col-md-4">
                        <Link to="/productos">
                            <button className="btn btn-block" style={{ backgroundColor: '#02457A', color: 'white' }}>Productos</button>
                        </Link>
                    </div>
            <div class="text-center col-md-4 ">
                <div class="d-flex justify-content-center">
                    <input type="text" class="form-control" style="max-width: 150px;"></input>
                </div>
            </div>
            <div class="col-md-2 text-center">
                <button class="btn" style="background-color: #02457A; color: white;">Descuentos</button>
                <button class="btn" style="background-color: #02457A; color: white;">+</button>
            </div>
        </div>
    </div>
</header>

}

export default Header;