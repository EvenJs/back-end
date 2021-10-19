const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  _id:{
    type: String,
    uppercase: true,
    alias: 'code',
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
},
{
  timestamps:true,
  toJSON: {
    virtuals: true,
  }
});

// same as alias
// courseSchema.virtual('code').get(function() {
//   return this._id;
// })

const model = mongoose.model('Course', courseSchema);

module.exports = model;