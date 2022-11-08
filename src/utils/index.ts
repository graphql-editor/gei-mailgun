import Mailgun from 'mailgun.js';
import formData from 'form-data';
import { GraphQLTypes } from '../zeus';

const getMailgunEnvs = () => {
  const { MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_SENDER } = process.env;
  if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN || MAILGUN_SENDER) {
    throw new Error('mailgun envs not set');
  }
  return { apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN, from: MAILGUN_SENDER };
};

const mailgun = new Mailgun(formData);
const mg = mailgun.client({ key: getMailgunEnvs().apiKey, url: 'https://api.eu.mailgun.net', username: 'gei-mailgun' });

export const sendMessage = ({ message, to, subject }: GraphQLTypes['MailgunData']) => {
  return mg.messages.create(getMailgunEnvs().domain, { from: getMailgunEnvs().from, to, subject, text: message });
};
