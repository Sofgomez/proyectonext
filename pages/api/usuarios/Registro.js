const mongoose = require('mongoose');

// Conectar a MongoDB Atlas (reemplaza <usuario> y <contraseña> con tus credenciales)
mongoose.connect('mongodb+srv://<sofia>:<Sofia52007>@cluster0.mongodb.net/usuariosDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch(err => console.log('Error de conexión:', err));

// Crear el esquema para los usuarios
const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  fecha_registro: { type: Date, default: Date.now },
  activo: { type: Boolean, default: true }
});

// Crear el modelo basado en el esquema
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Función para registrar un nuevo usuario
const registrarUsuario = async (nombre, email, contraseña) => {
  const usuario = new Usuario({
    nombre,
    email,
    contraseña,  // Asegúrate de cifrar la contraseña antes de guardarla
  });

  try {
    await usuario.save();
    console.log('Usuario registrado con éxito');
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
  }
};

// Ejemplo de registro de usuario
registrarUsuario('Juan Pérez', 'juan.perez@email.com', 'contraseñaSegura123');
