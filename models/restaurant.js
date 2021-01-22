const mongoose = require('mongoose')
const Schema = mongoose.Schema
const restaurantSchema = new Schema({
  id: Number,
  name: {
    type: String, // 資料型別是字串
    required: true // 這是個必填欄位
  },
  name_en: String,
  category: String,
  image: String,
  location: String,
  phone: String,
  google_map: String,
  rating: Number,
  description: String
})

module.exports = mongoose.model('Restaurant', restaurantSchema)


