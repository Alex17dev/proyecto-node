import { apiRequest } from '../utils/apiClient.js';

export async function listProducts() {
    const products = await apiRequest('/products');
    products.forEach(({ id, title, price }) => {
        console.log(`- [${id}] ${title} | $${price}`);
    });
}

export async function getProduct(id) {
    const product = await apiRequest(`/products/${id}`);
    console.log(`🔍 Producto [${product.id}]: ${product.title}`);
    console.log(`Precio: $${product.price}`);
    console.log(`Categoría: ${product.category}`);
    console.log(`Descripción: ${product.description}`);
}

export async function createProduct(title, price, category) {
    const newProduct = {
        title,
        price: parseFloat(price),
        description: 'Producto creado desde CLI',
        image: 'https://i.pravatar.cc',
        category
    };
    const result = await apiRequest('/products', {
        method: 'POST',
        body: JSON.stringify(newProduct),
        headers: { 'Content-Type': 'application/json' }
    });
    console.log('✅ Producto creado:', result);
}

export async function deleteProduct(id) {
    const result = await apiRequest(`/products/${id}`, {
        method: 'DELETE'
    });
    console.log('🗑️ Producto eliminado:', result);
}
