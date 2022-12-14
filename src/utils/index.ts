import Mailgun from 'mailgun.js';
import formData from 'form-data';
import { GraphQLTypes } from '../zeus';

const { key, domain, sender } = (() => {
  const { MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_SENDER } = process.env;
  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN || !MAILGUN_SENDER) {
    throw new Error('mailgun envs not set');
  }
  return { key: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN, sender: MAILGUN_SENDER };
})();

const mailgun = new Mailgun(formData);
const mg = mailgun.client({ key, url: `https://api.mailgun.net/`, username: 'gei-mailgun' });

export const sendMessage = ({ message, to, subject, from }: GraphQLTypes['MailgunData']) =>
  mg.messages.create(domain, {
    from: from || sender,
    to,
    subject,
    text: message,
  });

export const sendMessageHTML = ({ message, to, subject, from }: GraphQLTypes['MailgunData']) =>
  mg.messages.create(domain, {
    from: from || sender,
    to,
    subject,
    html: message,
  });
