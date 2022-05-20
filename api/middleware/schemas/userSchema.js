import Joi from 'joi';

const userSchema = Joi.object().keys({
  name: Joi.string().required(),
  password: Joi.string().required(),
  app_name: Joi.string().required(),
  birthdate: Joi.date().iso().messages({'date.format': `Date format is YYYY-MM-DD`}).required(),
  email: Joi.string().email().required()
});

export { userSchema };
