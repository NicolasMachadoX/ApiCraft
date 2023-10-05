const {Schema,model} = require('mongoose');

const userSchema = Schema({

    name:{
        type: String,
        require: [true, 'El nombre es obligatorio']
    },
    email:{
        type: String,
        require: [true, 'El correo es obligatorio']
    },
    password:{
        type: String,
        require: [true, 'La contraseña es obligatoria']
    },
    status:{
        type: Boolean,
        require: [true, 'El estado es obligatorio']
    }

})

module.exports = model('users', userSchema)