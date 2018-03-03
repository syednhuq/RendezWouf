module.exports= function(sequelize,Datatypes){
  var Puppy = sequelize.define("puppylist",{
  Photo:Datatypes.STRING,
  Puppy_name: Datatypes.STRING,
  State: Datatypes.STRING,
  City:Datatypes.STRING,
  Zip:Datatypes.STRING,
  Email:Datatypes.STRING

  })///
  return Puppy
}
