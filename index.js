import { listProducts, getProduct, createProduct, deleteProduct } from './services/productService.js';

const [,, method, resource, ...params] = process.argv;

async function main() {
    try {
        switch (`${method} ${resource}`) {
            case 'GET products':
                if (params[0]) {
                    await getProduct(params[0]);
                } else {
                    await listProducts();
                }
                break;
            case 'POST products':
                const [title, price, category] = params;
                if (!title || !price || !category) {
                    console.error('❗ Uso: POST products <title> <price> <category>');
                    return;
                }
                await createProduct(title, price, category);
                break;
            case 'DELETE products':
                if (!params[0]) {
                    console.error('❗ Uso: DELETE products <id>');
                    return;
                }
                await deleteProduct(params[0]);
                break;
            default:
                console.log('❗ Comando no reconocido.');
                console.log('Comandos disponibles:');
                console.log('- GET products');
                console.log('- GET products <id>');
                console.log('- POST products <title> <price> <category>');
                console.log('- DELETE products <id>');
        }
    } catch (error) {
        console.error('❌ Error ejecutando el comando:', error.message);
    }
}

main();
