document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });

  document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
});

// Swiper
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

// Smooth Scroll para todos los enlaces
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

document
  .getElementById("miFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir envío normal del formulario

    // Resetear mensajes de error previos
    resetErrorMessages();

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let planeta = document.getElementById("planeta").value.trim();
    let privacidadCheckbox = document.getElementById("privacidad");

    let isValid = true;

    // Validar Nombre (no vacío y solo letras y espacios)
    if (!nombre) {
      isValid = false;
      mostrarError("nombre", "El nombre es obligatorio.");
    } else if (!/^[a-zA-Z\s]+$/.test(nombre)) {
      isValid = false;
      mostrarError(
        "nombre",
        "El nombre solo puede contener letras y espacios."
      );
    }

    // Validar Email (formato de email válido)
    if (!email) {
      isValid = false;
      mostrarError("email", "El email es obligatorio.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      isValid = false;
      mostrarError("email", "El email no tiene un formato válido.");
    }

    // Validar Teléfono (opcional - solo ejemplo de formato numérico básico)
    if (telefono && !/^[0-9\s+-]*$/.test(telefono)) {
      // Permite números, espacios, +, -
      isValid = false;
      mostrarError(
        "telefono",
        "El teléfono solo puede contener números, espacios, + y -."
      );
    }

    // Validar Planeta (opcional - no vacío, podrías añadir validaciones específicas si es necesario)
    if (!planeta) {
      isValid = false;
      mostrarError("planeta", "El planeta de nacimiento es obligatorio."); // Opcional: si planeta es obligatorio
    }

    // Validar Checkbox de Privacidad (debe estar marcado)
    if (!privacidadCheckbox.checked) {
      isValid = false;
      mostrarError("privacidad", "Debes aceptar la política de privacidad.");
    }

    if (isValid) {
      // Simulación de envío exitoso (solo si todas las validaciones pasan)
      setTimeout(function () {
        Swal.fire({
          icon: "success",
          title: "¡Mensaje Enviado!",
          text: "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.",
          confirmButtonColor: "#FFD700",
        }).then((result) => {
          if (result.isConfirmed) {
            document.getElementById("miFormulario").reset();
          }
        });
      }, 500);
    }
  });

function mostrarError(campoId, mensaje) {
  let campo = document.getElementById(campoId);
  let errorSpan = document.createElement("span");
  errorSpan.className = "error-message";
  errorSpan.textContent = mensaje;
  campo.parentNode.insertBefore(errorSpan, campo.nextSibling); // Inserta el span de error después del input
  campo.classList.add("input-error"); // Añade clase para estilo visual de error en el input (opcional)
}

function resetErrorMessages() {
  let errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((message) => message.remove()); // Elimina todos los mensajes de error
  let errorInputs = document.querySelectorAll(".input-error");
  errorInputs.forEach((input) => input.classList.remove("input-error")); // Remueve clase de error de inputs (opcional)
}
