// Play ground to play with various algo
// const sgMail = require( '@sendgrid/mail' )
// sgMail.setApiKey( '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' )
// let otp = 123
// sgMail
//   .send( msg )
//   .then( (a) => {
//     console.log( 'Email sent', a )
//   } )
//   .catch( ( error ) => {
//     console.error( error )
//   } )
const {
  calculateActionReputation,
} = require("../utils/maths/reputationFunctions");
const post = {
  upvotes: [],
  downvotes: [],
  repu: 0,
  normalRepu: 0,
};

const hey = () => {};
