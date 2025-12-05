const Joi = require('joi');

const courtSchema = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
  hours: Joi.string().required(),
  courts: Joi.string().required(),
  amenities: Joi.string().required(),
  phone: Joi.string().pattern(/^[\d\s\-()]+$/).min(10).required(),
  parking: Joi.string().required(),
  fees: Joi.string().required(),
  picture: Joi.string().allow('').optional()
});

const groupSchema = Joi.object({
  name: Joi.string().required(),
  location: Joi.string().required(),
  day: Joi.string().required(),
  time: Joi.string().required(),
  skillLevel: Joi.string().required(),
  description: Joi.string().required(),
  organizer: Joi.string().allow('').optional(),
  contactEmail: Joi.string().email().allow('').optional(),
  averageAttendance: Joi.string().allow('').optional(),
  picture: Joi.string().allow('').optional()
});

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.string().required(),
  description: Joi.string().required(),
  detailedDescription: Joi.string().allow('').optional(),
  skillLevel: Joi.string().required(),
  image: Joi.string().required()
});

module.exports = {
  courtSchema,
  groupSchema,
  productSchema
};

