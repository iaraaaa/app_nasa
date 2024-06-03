const gateway =" https://api.nasa.gov/planetary/apod";
const api_key ="xLPAXGJsJOsdvKNbnb1VI1b3RY9h7OlNd1CY1pxS";


export default apiGet = async (parametros) => {
    try{//voy a intentar hacer esto
        const response = await fetch(`${gateway}?api_key=${api_key}${parametros.length > 0 ? parametros: ""} `);
        return await response.json();
    }
    catch(error){//capturo el error y hago algo
        console.error(error);
    }
    finally{//fin(depues de try y catch,no es obligatorio)
    }

};