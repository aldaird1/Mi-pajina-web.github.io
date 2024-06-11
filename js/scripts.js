
document.getElementById('show-textarea-button').addEventListener('click', function() {
    document.getElementById('textarea-container').style.display = 'block';
  });
  
  document.getElementById('send-comments-button').addEventListener('click', function() {
    var userComments = document.getElementById('user-comments').value;
    if (userComments.trim() === "") {
      alert("Por favor, escribe un comentario antes de enviar.");
      return;
    }
  
    // Enviar el comentario a través de un formulario oculto
    var form = document.createElement('form');
    form.action = 'enviar_comentario.php'; // Cambia esto a la URL de tu servidor de procesamiento
    form.method = 'POST';
    form.style.display = 'none';
  
    var textarea = document.createElement('textarea');
    textarea.name = 'comentarios';
    textarea.value = userComments;
  
    form.appendChild(textarea);
    document.body.appendChild(form);
    form.submit();
  });
document.getElementById('facebook').addEventListener('click', redirigirFacebook);
document.getElementById('github').addEventListener('click', redirigirGithub);
document.getElementById('linkedin').addEventListener('click', redirigirLinkedin);

function redirigirFacebook() {
    window.location.href = 'https://www.facebook.com/';
}

function redirigirGithub() {
    window.location.href = 'https://github.com/';
}

function redirigirLinkedin() {
    window.location.href = 'https://www.linkedin.com/';
}



function validarFormulario() {
  const nombre = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const asunto = document.getElementById("asunto").value;
  const mensaje = document.getElementById("mensaje").value;

  if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
      alert("Por favor, completa todos los campos.");
      return false;
  }

  const envioExitoso = true; // Cambia a false si el envío falla

  if (envioExitoso) {
      alert("Su fortmulario ha sido enviado, EXCELENTE!!!");
  }

  return envioExitoso; // Retorna el estado de envioExitoso
}
