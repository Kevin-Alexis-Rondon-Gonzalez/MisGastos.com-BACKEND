//Product paths
const express = require('express');
const router = express.Router();
const prodcutoController = require('../controllers/productoController');

//config api/productos
router.post('/', prodcutoController.crearProducto);
router.get('/', prodcutoController.obtenerProductos);
router.put('/:id', prodcutoController.actualizarProducto);
router.get('/:id', prodcutoController.obtenerProducto);
router.delete('/:id', prodcutoController.eliminarProducto);

module.exports = router;