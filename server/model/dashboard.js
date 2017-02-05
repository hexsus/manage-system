const mongoose = require('mongoose');

let DashboardSchema = new mongoose.Schema({
   name: {
       type: String,
       required: true,
       minlength: 1,
       trim: true
   },
    _creator: {
       type: mongoose.Schema.Types.ObjectId,
       required: true
    }
});

let Dashboard = mongoose.model('Dashboard', DashboardSchema);

module.exports = {Dashboard};