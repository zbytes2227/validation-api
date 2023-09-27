const mongoose = require('mongoose')

const connectDb = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res)
    }
    await mongoose.connect("")
    return handler(req, res)
}
export default connectDb;