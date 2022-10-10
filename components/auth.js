const sourceModel = require("../models/sourceModel");
const validateEmail = function (email) {

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return (true)
  }
  return (false)
}
const sendOtp =  async(email) =>{

  let response = await sourceModel.saveOtpInDB(email);
  // console.log("response in auth");
  if (response.success) {
    return true;
  } else {
    return false;
  }
  //store otp in DB and send otp to this mail



}

module.exports = { validateEmail, sendOtp }