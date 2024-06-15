import "../style.css"
const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            <div style={{ marginBottom: '10px', textAlign: 'left' }}>
                <button style={{ background: 'none', border: 'none', color: 'blue', fontWeight: 'bold', display: 'block' }}>Inicio</button>
                <button style={{ background: 'none', border: 'none', color: 'blue', fontWeight: 'bold', display: 'block' }}>Buscar Tienda</button>
                <button style={{ background: 'none', border: 'none', color: 'blue', fontWeight: 'bold', display: 'block' }}>Regístrate</button>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                    <li style={{ display: 'inline-block', marginRight: '20px', verticalAlign: 'top' }}>
                        <h3>ABARROTES</h3>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li>Arroz</li>
                            <li>Papa</li>
                            <li>Yuca</li>
                        </ul>
                    </li>
                    <li style={{ display: 'inline-block', marginRight: '20px', verticalAlign: 'top' }}>
                        <h3>CARNES</h3>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li>Pollo</li>
                            <li>Pescado</li>
                            <li>Chancho</li>
                        </ul>
                    </li>
                    <li style={{ display: 'inline-block', marginRight: '20px', verticalAlign: 'top' }}>
                        <h3>USO PERSONAL</h3>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li>Toalla</li>
                            <li>Jabon</li>
                            <li>Shampoo</li>
                        </ul>
                    </li>
                    <li style={{ display: 'inline-block', verticalAlign: 'top' }}>
                        <h3>BEBIDAS</h3>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                            <li>Agua</li>
                            <li>Jugo</li>
                            <li>Alcoholicas</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <button style={{ background: 'none', border: 'none' }}><img src=""></img></button>
                <button style={{ background: 'none', border: 'none' }}><img src=""></img></button>
                <button style={{ background: 'none', border: 'none' }}><img src=""></img></button>
            </div>
        </footer>
    );
}

export default Footer;