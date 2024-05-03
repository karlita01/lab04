import computadoras from './data/computadoras.json'

const Single = () => {

    const currentRoute = window.location.pathname;
    const compu = computadoras.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{compu.name}</h1>
        <hr></hr>
        <img src={compu.picture}></img>
        <p>{compu.description}</p>
    </>);
}

export default Single;