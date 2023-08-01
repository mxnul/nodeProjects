var userModel = require('./userModel');

// module.exports.getDataFromDBService = () => {

//     return new Promise (function checkURL(resolve, reject){
//     userModel.find({}, function returnData(error, result){

//        if(error) {
//            reject(false);
//        } else{
//            resolve(result);
//        }
//     });

//     });

// }
module.exports.getDataFromDBService = async () => {
    try {
      const result = await userModel.find({});
      return result;
    } catch (error) {
      console.error('Error fetching data from the database:', error);
      throw error;
    }
  };

    module.exports.createUserDBService = async (userDetails) => {
        try {
          const userModelData = new userModel({
            name: userDetails.name,
            address: userDetails.address,
            phone: userDetails.phone,
          });
      
          const result = await userModelData.save();
          return true;
        } catch (error) {
          console.error("Error saving document:", error);
          throw error;
        }
      };

    //   module.exports.updateUserDBService = (id,userDetails) => {     
    //     console.log(userDetails);
    //     return new Promise(function myFn(resolve, reject) {
    //         userModel.findByIdAndUpdate(id,userDetails, function returnData(error, result) {
    //           if(error)
    //           {
    //                 reject(false);
    //           }
    //           else
    //           {
    //              resolve(result);
    //           }
    //         });
     
    //     });
    //  }

    // module.exports.updateUserDBService = async (id, userDetails) => {
    //     try {
    //       const result = await userModel.findByIdAndUpdate(id, userDetails, { new: true });
    //       return result;
    //     } catch (error) {
    //       console.error('Error updating user in the database:', error);
    //       throw error;
    //     }
    //   };

    module.exports.updateUserDBService = async (id, userDetails) => {
        try {
          const result = await userModel.findByIdAndUpdate(id, userDetails, { new: true });
          return result;
        } catch (error) {
          console.error('Error updating user in the database:', error);
          throw error;
        }
      };

      module.exports.removeUserDBService = async (id) => {
        try {
          const result = await userModel.findByIdAndDelete(id);
          return result;
        } catch (error) {
          console.error('Error removing user from the database:', error);
          throw error;
        }
      };

    //   module.exports.removeUserDBService = (id) => { 
    //     return new Promise(function myFn(resolve, reject) {
    //         userModel.findByIdAndDelete(id, function returnData(error, result) {
     
    //           if(error)
    //           {
    //                 reject(false);
    //           }
    //           else
    //           {
    //              resolve(result);
    //           }          
    //         });
    //     });
     
    //  }


// module.exports.createUserDBService = (userDetails) => {


//     return new Promise(function myFn(resolve, reject) {
 
//         var userModelData = new userModel();
 
//         userModelData.name = userDetails.name;
//         userModelData.address = userDetails.address;
//         userModelData.phone = userDetails.phone;

//         userModelData.save(function resultHandle(error, result) {
 
//             if (error) {
//                 reject(false);
//             } else {
//                 resolve(true);
//             }
//         });
 
//     });
 
//  }
//  try {
//     const savedDocument = await myModel.save();
//     console.log("Document saved successfully:", savedDocument);
//   } catch (error) {
//     handleError(error);
//   }