class ProductManager {
    constructor(){
    this.products = [];
    }

    static id = 0;

    addProducts(title, description, price, image, code, stock) {
        for(let i = 0; i < this.products.length;i++){
            if(this.products[i].code === code){
                console.log(`El codigo ${code} esta repetido`);
                break;
            }
        }

        const newProduct ={
            title,
            description, 
            price, 
            image, 
            code, 
            stock,
        }

        if (!Object.values(newProduct).includes(undefined)){
        ProductManager.id++;
        this.products.push({
            ...newProduct,
            id:ProductManager.id,
        });
        }else{
            console.log("Todos los productos son requeridos");
        }
    }

    getProduct(){
        return this.products;
    }

    existe (id) {
        return this.products.find((producto ) => producto.id === id);
    }

    getProductById(id){
        !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id)); 
    }
}

const productos = new ProductManager();

//Primera llamada = arreglo vacio
console.log(productos.getProduct());

//Agregamos producto
productos.addProducts('titulo1', 'descripcion1', '2000', "imagen1", "abc123", 5);
productos.addProducts('titulo2', 'descripcion2', '2000', "imagen2", "abc124");

//Segunda llamada = arreglo con producto
console.log(productos.getProduct());

//Validacion de CODE repetido
productos.addProducts('titulo3', 'descripcion3', '2000', "imagen3", "abc124", 7);

//Busqueda de producto por ID 
productos.getProductById(2);

//Busqueda por producto no encontrado
productos.getProductById(3);
