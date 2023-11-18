import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Toast } from 'react-bootstrap';

export function MostrarToast({ onClose, cantidad }) {

  const messageSucces = "Se agregaron " + cantidad + " productos"

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="toast-wrapper" // Clase para estilos de la animación
    >
      <CSSTransition
        in={true} // Indica si la transición debería ejecutarse
        timeout={300} // Duración de la animación en milisegundos
        classNames="toast-animation" // Nombre de la clase para la animación
        unmountOnExit
      >
        <div className="toast-container top-left"> {/* Posición del toast */}
          <Toast onClose={onClose}>
            <Toast.Header>
              <strong className="me-auto">Título del Toast</strong>
            </Toast.Header>
            <Toast.Body>{messageSucces}</Toast.Body>
          </Toast>
        </div>
      </CSSTransition>
    </div>
  )
}
