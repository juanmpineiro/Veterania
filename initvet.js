var URLProdutos = "https://api.npoint.io/89dfbc7824a6ef5ba341";
var getJSONData = function(url){
    var result = {};
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
                return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
           return result;
    });
}

function verProductos(productosArray){
    let htmlContentToAppend = "";
    for(let i = 0; i < productosArray.length; i++){
        let productos = productosArray[i];
            htmlContentToAppend += `
            <a href="category-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ productos.nombre +`</h4>
                           
                           <small class="text-muted">` + productos.disponible + ` artículos <br>   $ ` + productos.precio + ` artículos</small>

                           
                      
                            
                        </div>
                        <p class="mb-1">` + productos.descripcion + `</p>
                    </div>
                </div>
            </a>
            `
      
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend // lleva todos los datos al contenedor
    }
}

function verOfertas(productosArray){
    let htmlContentToAppend = "";
    for(let i = 0; i < productosArray.length; i++){
        let productos = productosArray[i];
            htmlContentToAppend += `
            <a href="category-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ productos.nombre +`</h4>
                           
                           <small class="text-muted">` + productos.disponible + ` artículos <br>   $ ` + (productos.precio)*0.95 + ` artículos</small>

                           
                      
                            
                        </div>
                        <p class="mb-1">` + productos.descripcion + `</p>
                    </div>
                </div>
            </a>
            `
      
        document.getElementById("cat-list-container-ofertas").innerHTML = htmlContentToAppend // lleva todos los datos al contenedor
    }
}


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(URLProdutos).then(function(resultObj){
        if (resultObj.status === "ok"){
           verProductos(resultObj.data);
           verOfertas(resultObj.data);
        }
    })
}); 