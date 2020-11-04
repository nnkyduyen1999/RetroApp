const Joi = require("joi");

module.exports.registerValidation = (passedData) => {
  const schema = Joi.object({
    username: Joi.string().min(6).required(),
    email: Joi.string().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(passedData);
};

module.exports.loginValidation = (passedData) => {
  const schema = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(passedData);
};
