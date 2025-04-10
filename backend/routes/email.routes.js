import { Router } from 'express';
import { body } from 'express-validator';
import * as emailController from '../controllers/email.controller.js';

const emailRouter = Router();

// Ruta para enviar un correo genérico
emailRouter.post('/send', [
    body('from').isEmail().withMessage('El remitente debe ser un email válido'),
    body('to').isEmail().withMessage('El destinatario debe ser un email válido'),
    body('subject').notEmpty().withMessage('El asunto es requerido'),
    body('html').notEmpty().withMessage('El contenido HTML es requerido')
], emailController.sendMail);


export default emailRouter;