// var employeeModel = require('./employeeModel');
// var key = '123456789trytryrtyr';
// var encryptor = require('simple-encryptor')(key);

// module.exports.createEmployeeDBService = (employeeDetails) => {


//    return new Promise(function myFn(resolve, reject) {

//        var employeeModelData = new employeeModel();

//        employeeModelData.firstname = employeeDetails.firstname;
//        employeeModelData.lastname = employeeDetails.lastname;
//        employeeModelData.email =employeeDetails.email;
//        employeeModelData.password = employeeDetails.password;
//        var encrypted = encryptor.encrypt(employeeDetails.password);
//        employeeModelData.password = encrypted;

//        employeeModelData.save(function resultHandle(error, result) {

//            if (error) {
//                reject(false);
//            } else {
//                resolve(true);
//            }
//        });

//    });

// }

// module.exports.loginuserDBService = (employeeDetails)=> 
// {
//    return new Promise(function myFn(resolve, reject) 
//    {
//       employeeModel.findOne({ email: employeeDetails.email},function getresult(errorvalue, result)
//       {
//          if(errorvalue)
//          {
//             reject({status: false, msg: "Invaild Data"});
//          }
//          else
//          {
//             if(result !=undefined &&  result !=null)
//             {
//                var decrypted = encryptor.decrypt(result.password);

//                if(decrypted== employeeDetails.password)
//                {
//                   resolve({status: true,msg: "Employee Validated Successfully"});
//                }
//                else
//                {
//                   reject({status: false,msg: "Employee Validated failed"});
//                }
//             }
//             else
//             {
//                reject({status: false,msg: "Employee Error Detailssss"});
//             }

//          }
      
//       });
      
//    });
// }


var employeeModel = require('./employeeModel');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

module.exports.createEmployeeDBService = (employeeDetails) => {
  return new Promise(function myFn(resolve, reject) {
    var employeeModelData = new employeeModel({
      firstname: employeeDetails.firstname,
      lastname: employeeDetails.lastname,
      email: employeeDetails.email,
      password: encryptor.encrypt(employeeDetails.password)
    });

    employeeModelData
      .save()
      .then(result => {
        resolve(true);
      })
      .catch(error => {
        reject(false);
      });
  });
}

module.exports.loginUserDBService = (employeeDetails) => {
  return new Promise(function myFn(resolve, reject) {
    employeeModel.findOne({ email: employeeDetails.email })
      .then(result => {
        if (result != undefined && result != null) {
          var decrypted = encryptor.decrypt(result.password);
          if (decrypted == employeeDetails.password) {
            resolve({ status: true, msg: "Employee Validated Successfully" });
          } else {
            reject({ status: false, msg: "Employee Validation Failed" });
          }
        } else {
          reject({ status: false, msg: "Employee Error Details" });
        }
      })
      .catch(error => {
        reject({ status: false, msg: "Invalid Data" });
      });
  });
}
