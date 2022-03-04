export const SEND_EMAIL = 'SEND_EMAIL';

export const sendEmail = (email) => ({
  type: 'SEND_EMAIL',
  email,
});
export default sendEmail;
