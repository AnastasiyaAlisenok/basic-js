const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  email = [...email];
  let ind = email.findIndex(item => item ==='@');
  let domain = email.splice(ind+1, email.length - 1).join('');
  if(domain.includes('@')) {
   domain = getEmailDomain(domain)
  }
  return domain;
 }

module.exports = {
  getEmailDomain
};
