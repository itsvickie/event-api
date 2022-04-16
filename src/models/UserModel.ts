import mongoose from 'mongoose'

const user = new mongoose.Schema(
  {},
  {
    timestamps: true,
    collection: 'user'
  }
)

export default mongoose.model('User', user)
