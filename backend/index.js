/**
 * Backend de la landing page de MapYourWorld
 * Gestiona el envío de correos publicitarios
 */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import emailRouter from './routes/email.routes.js';


// Cargar variables de entorno
dotenv.config();

// Inicializar la app Express
const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/email', emailRouter);

// Ruta de salud para verificar que el servicio está funcionando
app.get('/health', (_req, res) => {
  res.status(200).json({
    service: 'landing-backend',
    status: 'operational',
    version: '1.0.0'
  });
});

// Iniciar el servidor
const startServer = async () => {
  try {
    // Iniciar servidor
    app.listen(PORT, () => {
      console.log(`✅ Servicio de ejecutándose en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar el servicio:', error);
    process.exit(1);
  }
};
startServer();

// Exportar la app para las pruebas
export default app;