const saveOtpInDB = async (email) => {
    const { Connection } = require("./connection.js");
  
    Connection.open();
    try {
      const collection = Connection.conn.db("test").collection("user_otp");
      const result = await collection.insertOne({"email":email,"otp":"456654"});
      console.log(result);
      if(result.acknowledged){
      return { success: true, data: result };
      }else{
      return { success: false, data: result };

      }
      // res.json({ result: result });
    } catch (error) {
      console.log(error);
      return { success: false, message: error };
      // res.status(500).json({ error });
    }
  };
  
  module.exports = { saveOtpInDB };
  