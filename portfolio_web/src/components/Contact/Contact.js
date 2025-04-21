import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Section from '../shared/Section';
import Shapes from '../decorative/Shapes';
import Button from '../shared/Button';

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

const ContactInfo = styled.div`
  h3 {
    margin-bottom: var(--spacing-md);
  }
  
  p {
    margin-bottom: var(--spacing-lg);
    font-size: 1.1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
`;

const SocialLink = styled(motion.a)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: var(--color-light-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--color-text);
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--color-accent);
    color: white;
    transform: translateY(-3px);
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  margin-bottom: var(--spacing-xs);
  font-weight: 500;
  font-size: 0.9rem;
`;

const FormInput = styled.input`
  height: 50px;
  padding: 0 15px;
  border: 1px solid var(--color-medium-gray);
  border-radius: 4px;
  font-family: var(--font-primary);
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: var(--color-accent);
    outline: none;
  }
`;

const FormTextarea = styled.textarea`
  padding: 15px;
  border: 1px solid var(--color-medium-gray);
  border-radius: 4px;
  font-family: var(--font-primary);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: var(--color-accent);
    outline: none;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: rgba(94, 139, 126, 0.1);
  border-left: 3px solid var(--color-accent);
  padding: var(--spacing-md);
  margin-top: var(--spacing-md);
  border-radius: 0 4px 4px 0;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <Section id="contact" title="Get In Touch">
      <Shapes type="contact" />
      
      <ContactGrid>
        <ContactInfo>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's start a conversation
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Whether you have a project in mind, want to discuss collaboration, or just want to say hello, I'd love to hear from you. Fill out the form or reach out through any of the channels below.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <strong>Email:</strong> hello@designportfolio.com
          </motion.div>
          
          <SocialLinks>
            <SocialLink 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              in
            </SocialLink>
            <SocialLink 
              href="https://dribbble.com" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ◓
            </SocialLink>
          </SocialLinks>
        </ContactInfo>
        
        <ContactForm
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FormGroup>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="subject">Subject</FormLabel>
            <FormInput
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="message">Message</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <div>
            <Button type="submit">
              Send Message
            </Button>
          </div>
          
          {formStatus.submitted && formStatus.success && (
            <SuccessMessage
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              Thank you for your message! I'll get back to you as soon as possible.
            </SuccessMessage>
          )}
        </ContactForm>
      </ContactGrid>
    </Section>
  );
};

export default Contact; 