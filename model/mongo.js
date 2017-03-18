let mongoose=require('mongoose')
let config=require('./config')

mongoose.connect(`mongodb://${config.db_url_local}`)

module.exports=mongoose