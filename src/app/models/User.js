const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    cpf: {
      type: String,
      unique: true,
      required: true
    },
    role: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }

  this.password = await bcrypt.hash(this.password, 8)
})

UserSchema.methods = {
  compareHash (password) {
    return bcrypt.compare(password, this.password)
  }
}

UserSchema.statics = {
  generateToken ({ id }) {
    return jwt.sign({ id }, authConfig.secret)
  }
}

const User = mongoose.model('Users', UserSchema)

module.exports = User
