class ProductManager {
    constructor() {
        this.products = [];
        this.idCounter = 0;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || stock === undefined) {
            console.log("Todos los campos del producto son requeridos.");
            return;
        }

        if (this.products.some(product => product.code === code)) {
            console.log(`El código ${code} ya existe.`);
            return;
        }

        this.idCounter++;
        this.products.push({
            id: this.idCounter,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        });
        console.log("Producto agregado con éxito.");
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            console.log(product);
        } else {
            console.log("Producto no encontrado.");
        }
    }
}

const productManager = new ProductManager();

productManager.addProduct('Producto 1', 'Descripción 1', 100, 'imagen1.jpg', 'ABC123', 10);
productManager.addProduct('Producto 2', 'Descripción 2', 150, 'imagen2.jpg', 'ABC124', 5);
productManager.addProduct('Producto 3', 'Descripción 3', 200, 'imagen3.jpg', 'ABC123', 8); // Código repetido
console.log(productManager.getProducts());
productManager.getProductById(2);
productManager.getProductById(4); // No encontrado
