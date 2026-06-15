document.addEventListener('DOMContentLoaded', () => {

  // 1. Mudança de Estilo no Header ao Rolar a Página
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // 2. Formulário de Contato Integrado ao WhatsApp
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const subject = document.getElementById('contactSubject').value;
      const message = document.getElementById('contactMessage').value;
      
      // Formata a mensagem com as informações digitadas
      const whatsappMessage = `Olá, Matheus!\n\n` +
                              `*Nome:* ${name}\n` +
                              `*E-mail:* ${email}\n` +
                              `*Assunto:* ${subject}\n\n` +
                              `*Mensagem:* ${message}`;
      
      // URL para abrir a conversa no WhatsApp
      const whatsappUrl = `https://wa.me/5544999071031?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Abre o WhatsApp em nova aba
      window.open(whatsappUrl, '_blank');
      
      // Reseta os campos do formulário após envio
      contactForm.reset();
    });
  }

});
