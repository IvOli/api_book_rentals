import Joi from 'joi';

const bookSchema = Joi.object().keys({
  title: Joi.string().required(),
  author: Joi.string().required(),
});

export { bookSchema };
