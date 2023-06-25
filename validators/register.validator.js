    const Joi = require('joi')

    const registerSchema = Joi.object({
        // firstName: Joi.string().required(),
        // lastName : Joi.string().min(1).required(),
        // email: Joi.string().email().lowercase().required(),
        // gender:Joi.string().valid('male', 'female', 'other').required(),
        // password: Joi.string().min(5).required(),
        // confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({ 'any.only': 'Passwords must match' }),
        // contact : Joi.string().min(1).required(),
        // address :  Joi.string().min(1).required(),
        // country: Joi.string().valid('USA','India','Canada', 'UK', 'Australia').required(),
        // state: Joi.string().valid('California','Texas','Gujarat', 'Maharastra', 'Rajasthan','victoria','canada','scotland').required(),
        // city: Joi.string().valid('los angeles','ahmedabad','surat', 'mumbai', 'toronto','london','sydney').required(),
        // pin_code:  Joi.string().min(1).required(),
        // phone : Joi.string().min(1).required(),

    });

    module.exports = registerSchema;