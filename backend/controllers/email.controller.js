import { sendEmail } from '../services/email.service.js';

/**
 * Enviar correo
 */
export const sendMail = async (req, res) => {
  try {
      const { from, to, subject, html, text, attachments } = req.body;
      if (!from || !to || !subject || !html) {
          res.status(400).json({
          success: false,
          message: 'Los campos from, to, subject y html son requeridos'
          });
          return;
      }
      const mailOptions = { to, subject, html, text, from, attachments };
      const result = await sendEmail(mailOptions);

      if (result.success) {
          res.status(200).json({
          success: true,
          message: 'Correo enviado correctamente'
          });
      } else {
          res.status(500).json({
          success: false,
          message: 'Error al enviar correo',
          error: result.error?.message
          });
      }
  } catch (error) {
      res.status(500).json({
          success: false,
          message: 'Error al enviar correo',
          error: error instanceof Error ? error.message : 'Error desconocido'
      });
  }
};