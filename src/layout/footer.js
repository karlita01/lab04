import "../style.css"
const Footer = () => {
    return <footer  className="terciary  ">
        <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary text-center ">
            <ul class="nav col-md-12 justify-content-center">
                <li class="nav-item "><a href="#" class="nav-link px-2 text-muted terciary">Casa</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted terciary">Informacion</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted terciary">Quejas</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted terciary">Correos</a></li>      
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted terciary">Mas</a></li>
            </ul>
        </div>
    </footer>;
}

export default Footer;