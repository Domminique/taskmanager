const mongoose = require('mongoose')


const connectDB = (url) =>{
 return mongoose
 .connect(url, {
     useNewUrlParser:true,
     useCreateIndex:true,
     useFindAndModify:false,
     useUnifiedTopology:true,
 
 })
}

module.exports = connectDB
















// module.exports = {
//   secretKey: '12345-67890-09876-54321',
//   mongoUrl: 'mongodb://34.132.135.252:27017'
//   mongoUrl: 'mongodb://localhost:27017/oroV4',
//   mongoUrl: 'mongodb://34.132.135.252:27017'
//   mongoUrl:
//     'mongodb+srv://dommy:dommy2021@cluster0.wr5fv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',

//   facebook: {
//     clientId: '933047533867309',
//     clientSecret: 'f279c08c9da8f680a673a17044b8438c',
//   },
// }
