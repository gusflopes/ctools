import React from "react"
import { Form, Button } from 'react-bootstrap'
import { toast } from 'react-toastify'


export const ContactForm = () => (
  <Form name="contact" method="post" data-netlify-recaptcha="true" data-netlify="true" style={{ padding: '0px 30px' }}>
    <Form.Group controlId="formBasicName">
      <Form.Label>Seu Nome</Form.Label>
      <Form.Control name="name" type="text" placeholder="Digite seu nome..." />
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>E-mail</Form.Label>
      <Form.Control name="email" type="email" placeholder="Digite seu melhor e-mail..." />
      <Form.Text className="text-muted">
        Não vamos compartilhar seu email com ninguém.
    </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicMessage">
      <Form.Label>Mensagem</Form.Label>
      <Form.Control name="message" as="textarea" rows="4" type="text" placeholder="Digite aqui sua mensagem..." />
    </Form.Group>
    <div data-netlify-recaptcha="true"></div>
    <Button type="submit" block variant="primary" >
      Enviar
  </Button>
  </Form>
)
export default ContactForm