import Joi from "joi";

const signupSchema = Joi.object({
    name: Joi.string().required().min(3),
    email: Joi.string(), 
    password: Joi.string().min(4).required(),
    confirmPassword: Joi.valid(Joi.ref("password"))
})

export default signupSchema;