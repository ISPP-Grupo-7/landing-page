import { emailConfig } from '../config/email.config.js';
import nodemailer from 'nodemailer'

/**
 * Crea un transportador de correo basado en la configuración
 * @returns Transportador configurado
 */
export const createTransporter = () => {
  // TODO: Implementar la creación del transportador
  // 1. Usar nodemailer.createTransport con la configuración de email
  // 2. Configurar opciones SSL/TLS según el entorno
  // NOTA: Requiere instalar el paquete nodemailer:
  // npm install nodemailer
  // npm install --save-dev @types/nodemailer
  
  
  // Create the transporter with the email configuration
  const transporter = nodemailer.createTransport({
    host: emailConfig.host,
    port: emailConfig.port,
    secure: emailConfig.secure, 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD 
    },
    
    ...(emailConfig.secure ? {} : {
      tls: {
        rejectUnauthorized: process.env.NODE_ENV === 'production' 
      }
    })
  });
  
  return transporter;
};

/**
 * Envía un correo electrónico
 * @param options Opciones para el envío de correo
 * @returns Resultado del envío
 */
export const sendEmail = async (options) => {
  // TODO: Implementar el envío de correo
  // 1. Crear transportador
  // 2. Enviar correo con las opciones proporcionadas
  // 3. Manejar errores y devolver resultado
  try {
    // Validar campos obligatorios
    if (!options.to || !options.subject || !options.html) {
      throw new Error('Faltan campos obligatorios: to, subject y html son requeridos');
    }
    const transporter = createTransporter();
    const mailOptions = {
      from: options.from || emailConfig.from,
      ...options
    };
    const result = await transporter.sendMail(mailOptions);
    return {
      success: true,
      messageId: result.messageId
    };
  } catch (error) {
    console.error('Error al enviar email:', error);
    let errorMessage = 'Error desconocido al enviar el email';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return {
      success: false,
      error: error
    };
  }
};