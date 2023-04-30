import { Contact } from './types';

const contactData = require('@data/contact.json');

export function getContactData() {
  return contactData as Contact;
}
