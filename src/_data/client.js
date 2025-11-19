module.exports = {
  name: 'L&L Contracting',
  nameCaps: 'L&L CONTRACTING',
  email: 'toptiercontractingco@gmail.com',
  phoneForTel: '+14693839184',
  phoneFormatted: '(469) 383-9184',
  address: {
    lineOne: '5140 Old Buena Vista Rd.',
    lineTwo: 'XXXX',
    city: 'Waxahachie',
    state: 'TX',
    zip: '75167',
    country: 'USA',
    mapLink: '#',
  },
  socials: {
    facebook: '#',
  },
  //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
  domain: 'https://www.toproof.netlify.app',
  // Passing the isProduction variable for use in HTML templates
  isProduction: process.env.ELEVENTY_ENV === 'PROD',
};
