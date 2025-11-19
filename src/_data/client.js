module.exports = {
  name: 'Fort Bend Web Designs',
  nameCaps: 'FORT BEND WEB DESIGNS',
  email: 'fortbendwebdesigns@gmail.com',
  phoneForTel: '+12149010531',
  phoneFormatted: '(214) 901-0531',
  address: {
    lineOne: 'XXXX',
    lineTwo: 'XXXX',
    city: 'XXXX',
    state: 'XXXX',
    zip: 'XXXX',
    country: 'United States of America',
    mapLink:
      'google.com/maps/place/Fort+Bend+Web+Designs/data=!4m2!3m1!1s0x0:0x375cbb3ba4f74b2b?sa=X&ved=1t:2428&hl=en&ictx=111',
  },
  socials: {
    facebook:
      'https://www.facebook.com/people/Fort-Bend-Web-Designs/61582613360630/#',
  },
  //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
  domain: 'https://www.fortbendwebdesigns.com',
  // Passing the isProduction variable for use in HTML templates
  isProduction: process.env.ELEVENTY_ENV === 'PROD',
};
