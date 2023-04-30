import contactData from '@data/contact.json';
import { Contact } from './types';

export function getContactData() {
  return contactData as Contact;
}
