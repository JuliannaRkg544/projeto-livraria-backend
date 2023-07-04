

import Joi from "joi"

const signinSchema = Joi.object({
    email: Joi.string(),
    password: Joi.string().min(4).required()
})

export default signinSchema;