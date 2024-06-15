import React from 'react';

function iniciosesion() {
  return (
    <div className="container">
      <div className="row">
        <main className="col-md-8" style={{ background: 'white' }}>

          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="coca.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="escabechce.png" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="lejia.png" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </main>

        <aside className="col-md-4" style={{ background: '#018ABE' }}>

          <div className="container">
            <div className="row">

              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5"> <img src="logo1.png" className="d-block w-100" alt="..." /></h5>
                <h1 className="text-center">Iniciar sesion</h1>
                <form>


                  <div className="d-grid mb-2">
                    <button className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                      <i className="fab fa-google me-2"></i> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                      </svg> Entrar con Google
                    </button>

                  </div>
                  <div className="d-grid">
                    <button className="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                      <i className="fab fa-facebook-f me-2"></i> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                      </svg> Entrar con Facebook
                    </button>
                  </div>
                  <hr className="my-4" />

                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Correo electronico</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Contraseña</label>
                  </div>

                  <div className="form-check mb-3 ">

                    <button className=" btn btn-secondary"> Olvide mi Contraseña</button>

                  </div>

                  <div className="d-grid">
                    <button className="btn btn-primary btn-login text-uppercase " style={{ background: '#02457A' }} type="submit">Ingresar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </aside>



      </div>
    </div>
  );
}

export default iniciosesion;