const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    fecha:{ //tiene que ingresar el valor por parametro
        type: String,
        required: true
    },
    ubicacion:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    fechaCreacion: { //creacion automatica
        type: Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('Producto', ProductoSchema);