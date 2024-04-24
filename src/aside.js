const feather = require('feather-icons');
feather.replace();
 setTimeout(()=>{
    feather.replace();
 }, 500)
 const Aside = () => {
    return <aside>
       

       <form >
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Correo electrónico</label>
                <input type="text" readonly class="form-control-plaintext" id="staticEmail"
                    value="email@example.com"></input>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        <div id="emailHelp" class="form-text">Nunca compartiremos su correo electrónico con nadie más.
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                            <label class="form-check-label" for="exampleCheck1">Verificado</label>
                    </div>
                    <button className="btn btn-primary">
                                <i data-feather="send"></i>
                                Enviar
                                </button>
        </form>
            </aside>;
}

            export default Aside;