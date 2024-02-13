import React, { useEffect } from 'react';

import Swal from 'sweetalert2';

const Alert = ({ value, message, onConfirm, onCancel }) => {
  useEffect(() => {
    const renderFunction = () => {
      if (value === 'delete') {
        handleDelete();
      } else {
        handleCustomImage();
      }
    };

    renderFunction();
  }, [value, onConfirm, onCancel]);

  const handleDelete = () => {
    Swal.fire({
      title: 'Tem Certeza?',
      text: 'Você não poderá recuperar depois!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, delete!',
      cancelButtonText: 'Não, cancelar!',
      background: '#363636',
      color: "#EEEEEE",
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      reverseButtons: true,
      backdrop: `
        rgba(54, 54, 54, 0.8)
        url('path/to/your-background-image.jpg')
        center/cover
      `,
      customClass: {
        popup: 'custom-popup-class',
        title: 'custom-title-class',
        content: 'custom-content-class',
        confirmButton: 'custom-confirm-button-class',
        cancelButton: 'custom-cancel-button-class',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
        Swal.fire({
          title: 'Deletado!',
          text: 'Seu arquivo foi deletado.',
          icon: 'success',
          background: '#363636',
          color: "#EEEEEE",
          confirmButtonColor: '#3085d6',
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        onCancel();
        Swal.fire({
          title: 'Cancelado',
          text: 'Ação cancelada :)',
          icon: 'info',
          background: '#363636',
          color: "#EEEEEE",
          confirmButtonColor: '#3085d6',
        });
      }
    });
  };



  const handleCustomImage = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500,
      background: '#363636',  
      textColor: '#ffffff',   
      customClass: {
        popup: 'custom-popup-class',
        title: 'custom-title-class',
        content: 'custom-content-class',
      },
    });
  };

  return null;
};

export default Alert;
