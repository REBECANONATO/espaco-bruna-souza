import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsappSquare } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { Container } from './styles';

function Social() {
  return (
    <Container>
 
      <a id="instagran" title="Instagran" href="https://www.instagram.com/bru.estetic/?hl=pt-br">
        <FaInstagram />
      </a>
      <a id="facebook" title="Facebook" href="https://www.facebook.com/bruna.souza.unhas">
        <FaFacebook />
      </a>
      <a id="whats" title="WhatsApp" href="https://api.whatsapp.com/send?phone=5535998581340&text=Ol%C3%A1%2C%20envie%20sua%20mensagem%2C%20logo%20irei%20responder.">
        <FaWhatsappSquare />
      </a>
    </Container>
  );
}

export default Social;
