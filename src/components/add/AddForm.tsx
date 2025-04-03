import React, { useState } from "react";
import SentModal from './SentModal';
import AlertModal from './AlertModal';

interface AdvertisementPoint {
  email: string,
  name: string,
  description: string,
  address: string,
  city: string,
  postalcode: string,
  country: string,
  comments: string
}

const MAIL_ADDRESS = 'mapyourworld.group7@gmail.com'
const API_URL = 'http://localhost:3001'

const AddForm = () => {
  const [ point, setPoint ] = useState<AdvertisementPoint>({
    email:'',
    name:'',
    description:'',
    address:'',
    city: '',
    postalcode: '',
    country: '',
    comments: ''
  })
  const [errors, setErrors] = useState({
    email: '',
    name:'',
    description:'',
    address:'',
    city: '',
    postalcode: '',
    country: '',
    comments: ''
  });
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
    
  const validateForm = () => {
    const newErrors = { ...errors };
    let isValid = true;

    // validación del correo
    if (!point.email.trim()) {
        newErrors.email = 'El correo electrónico es obligatorio';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(point.email)) {
        newErrors.email = 'Introduce un correo electrónico válido';
        isValid = false;
    }

    // validación del nombre
    if (!point.name.trim()) {
        newErrors.name = 'El nombre es obligatorio';
        isValid = false;
    }

    // validación de la dirección
    if (!point.address.trim()) {
        newErrors.address = 'La dirección es obligatoria';
        isValid = false;
    }
    if (!point.city.trim()) {
        newErrors.city = 'La ciudad es obligatoria';
        isValid = false;
    }
    if (!point.postalcode.trim()) {
        newErrors.postalcode = 'El código postal es obligatorio';
        isValid = false;
    } else if (!/\d/.test(point.postalcode)) {
        newErrors.postalcode = 'Código postal no válido';
        isValid = false;
    }
    if (!point.country.trim()) {
        newErrors.country = 'El país es obligatorio';
        isValid = false;
    }

    setErrors(newErrors);
    return isValid;
}

  const handleChange = (field: keyof typeof point, value: string) => {
    setPoint(prev => ({ ...prev, [field]: value }));
    // Limpiar error del campo cuando se modifica
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };
  
  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);

    const subject = `Solicitud de punto publicitario: ${point.name}`
    const body = `<h3>Datos del punto</h3><p>Nombre: ${point.name}`
        + `${point.description ? `<br>Descripción: ${point.description}` : ``}`
        + `<br>Dirección: ${point.address}, ${point.city} ${point.postalcode}, ${point.country}</p>`
        + `<h3>Datos de contacto</h3><p>Correo electrónico: ${point.email}`
        + `<br>Fecha de registro de la solicitud: ${new Date(Date.now()).toLocaleString()}`
        + `${point.comments ? `<br>Comentarios del solicitante: ${point.comments}</p>` : `</p>`}`;

        const response = await fetch(`${API_URL}/api/email/send`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              from: point.address,
              to: MAIL_ADDRESS,
              subject: subject,
              html: body,
          }),
      });
  
      const data = await response.json();
      
      if (response.ok) {
          setIsSent(true);
          setPoint({
            email:'',
            name:'',
            description:'',
            address:'',
            city: '',
            postalcode: '',
            country: '',
            comments: ''
          })
      } else {
          setIsAlert(true);
      }

    setLoading(false);
  };

  return (
    <div className="min-h-screen py-12 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center parallax-bg opacity-20" />
      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-16">
          {/* Content */}
          <div className="flex-1 justify-center items-center ad-container m-8">
            <div style={{ 
              backgroundColor: 'white', 
              padding: 40,
              borderRadius: 12, 
              width: '600px',
              maxWidth: '600px', 
              margin: '0 auto',
              display: 'flex', 
              flexDirection: 'column',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <h1 style={{ fontSize: 35, fontWeight: 'bold', }}>
                <span style={{color: '#2bbbad'}}>Publicítate</span> con nosotros
              </h1>
              <div style={{ margin: 20, fontSize: 16, color: '#64748b', }}>
                Si quieres aparecer en nuestro mapa, ponte en contacto con nuestro equipo rellenando el siguiente formulario.
              </div>
              
              <div style={{ width: '100%', marginBottom: 20 }}>
                {/* Correo electrónico */}
                <div className="input-container" style={{ marginBottom: 20 }}>
                  <div style={{ marginBottom: 8, fontWeight: 500, color: '#333', textAlign: 'left' }}>
                    Correo electrónico
                  </div>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="email"
                      placeholder="Correo electrónico"
                      value={point.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      style={{ 
                        width: '100%',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        height: '44px',
                        borderColor: errors.email ? '#e53e3e' : undefined,
                        border: '2px solid #e2e8f0',
                        borderRadius: 8,
                        fontSize: 16,
                        transition: 'border-color 0.2s',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                  {errors.email && (
                    <div style={{ color: '#e53e3e', fontSize: '14px', marginTop: '4px', textAlign: 'left' }}>
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Name */}
                <div className="input-container" style={{ marginBottom: 20 }}>
                  <div style={{ marginBottom: 8, fontWeight: 500, color: '#333', textAlign: 'left' }}>
                    Nombre del punto
                  </div>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      placeholder="Nombre"
                      value={point.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      style={{ 
                        width: '100%',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        height: '44px',
                        borderColor: errors.name ? '#e53e3e' : undefined,
                        border: '2px solid #e2e8f0',
                        borderRadius: 8,
                        fontSize: 16,
                        transition: 'border-color 0.2s',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                  {errors.name && (
                    <div style={{ color: '#e53e3e', fontSize: '14px', marginTop: '4px', textAlign: 'left' }}>
                      {errors.name}
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="input-container" style={{ marginBottom: 20 }}>
                  <div style={{ marginBottom: 8, fontWeight: 500, color: '#333', textAlign: 'left' }}>
                    Descripción
                  </div>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="textarea"
                      placeholder="Descripción"
                      value={point.description}
                      onChange={(e) => handleChange('description', e.target.value)}
                      style={{ 
                        width: '100%',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        height: '44px',
                        borderColor: errors.description ? '#e53e3e' : undefined,
                        border: '2px solid #e2e8f0',
                        borderRadius: 8,
                        fontSize: 16,
                        transition: 'border-color 0.2s',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                  {errors.description && (
                    <div style={{ color: '#e53e3e', fontSize: '14px', marginTop: '4px', textAlign: 'left' }}>
                      {errors.description}
                    </div>
                  )}
                </div>

                {/* Address */}
                <div className="input-container" style={{ marginBottom: 20 }}>
                  <div style={{ marginBottom: 8, fontWeight: 500, color: '#333', textAlign: 'left' }}>
                    Dirección
                  </div>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      placeholder="Dirección"
                      value={point.address}
                      onChange={(e) => handleChange('address', e.target.value)}
                      style={{ 
                        width: '100%',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        height: '44px',
                        borderColor: errors.address ? '#e53e3e' : undefined,
                        border: '2px solid #e2e8f0',
                        borderRadius: 8,
                        fontSize: 16,
                        transition: 'border-color 0.2s',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                  {errors.address && (
                    <div style={{ color: '#e53e3e', fontSize: '14px', marginTop: '4px', textAlign: 'left' }}>
                      {errors.address}
                    </div>
                  )}
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', gap: 5, marginBottom: 20, }}>
                  {/* City */}
                  <div className="input-container" style={{ width: '50%', }}>
                    <div style={{ marginBottom: 8, fontWeight: 500, color: '#333', textAlign: 'left' }}>
                      Ciudad
                    </div>
                    <div style={{ position: 'relative' }}>
                      <input
                        placeholder="Ciudad"
                        value={point.city}
                        onChange={(e) => handleChange('city', e.target.value)}
                        style={{ 
                          width: '100%',
                          paddingLeft: '10px',
                          paddingRight: '10px',
                          height: '44px',
                          borderColor: errors.city ? '#e53e3e' : undefined,
                          border: '2px solid #e2e8f0',
                          borderRadius: 8,
                          fontSize: 16,
                          transition: 'border-color 0.2s',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                    {errors.city && (
                      <div style={{ color: '#e53e3e', fontSize: '14px', marginTop: '4px', textAlign: 'left' }}>
                        {errors.city}
                      </div>
                    )}
                  </div>
                  {/* Postal code */}
                  <div className="input-container" style={{ width: '50%', }}>
                    <div style={{ marginBottom: 8, fontWeight: 500, color: '#333', textAlign: 'left' }}>
                      Código postal
                    </div>
                    <div style={{ position: 'relative' }}>
                      <input
                        type="number"
                        placeholder="Código postal"
                        value={point.postalcode}
                        onChange={(e) => handleChange('postalcode', e.target.value)}
                        style={{ 
                          width: '100%',
                          paddingLeft: '10px',
                          paddingRight: '10px',
                          height: '44px',
                          borderColor: errors.postalcode ? '#e53e3e' : undefined,
                          border: '2px solid #e2e8f0',
                          borderRadius: 8,
                          fontSize: 16,
                          transition: 'border-color 0.2s',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                    {errors.postalcode && (
                      <div style={{ color: '#e53e3e', fontSize: '14px', marginTop: '4px', textAlign: 'left' }}>
                        {errors.postalcode}
                      </div>
                    )}
                  </div>
                </div>
                {/* Country */}
                <div className="input-container" style={{ marginBottom: 20 }}>
                  <div style={{ marginBottom: 8, fontWeight: 500, color: '#333', textAlign: 'left' }}>
                    País
                  </div>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      placeholder="País"
                      value={point.country}
                      onChange={(e) => handleChange('country', e.target.value)}
                      style={{ 
                        width: '100%',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        height: '44px',
                        borderColor: errors.country ? '#e53e3e' : undefined,
                        border: '2px solid #e2e8f0',
                        borderRadius: 8,
                        fontSize: 16,
                        transition: 'border-color 0.2s',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                  {errors.country && (
                    <div style={{ color: '#e53e3e', fontSize: '14px', marginTop: '4px', textAlign: 'left' }}>
                      {errors.country}
                    </div>
                  )}
                </div>

                {/* Comments */}
                <div className="input-container" style={{ marginBottom: 20 }}>
                  <div style={{ marginBottom: 8, fontWeight: 500, color: '#333', textAlign: 'left' }}>
                    Comentarios
                  </div>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="textarea"
                      placeholder="Comentarios"
                      value={point.comments}
                      onChange={(e) => handleChange('comments', e.target.value)}
                      style={{ 
                        width: '100%',
                        paddingLeft: '10px',
                        paddingRight: '10px',
                        height: '44px',
                        borderColor: errors.description ? '#e53e3e' : undefined,
                        border: '2px solid #e2e8f0',
                        borderRadius: 8,
                        fontSize: 16,
                        transition: 'border-color 0.2s',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                  {errors.comments && (
                    <div style={{ color: '#e53e3e', fontSize: '14px', marginTop: '4px', textAlign: 'left' }}>
                      {errors.comments}
                    </div>
                  )}
                </div>

                {/* Botón */}
                <div style={{ width: '100%' }}>
                  <button 
                    onClick={handleSubmit}
                    style={{
                      width: '100%',
                      backgroundColor: '#2bbbad',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '12px 0',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      height: '44px',
                      transition: 'background-color 0.2s'
                    }}
                  >
                    {loading ? 'Cargando...' : 'Enviar'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Modales */}
          <SentModal isVisible={isSent} onClose={() => setIsSent(false)} />
          <AlertModal isVisible={isAlert} onClose={() => setIsAlert(false)} />
        </div>
      </div>
    </div>
  );
};

export default AddForm; 