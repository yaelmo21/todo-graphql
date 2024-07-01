import * as Joi from 'joi';

export const EnvValidationSchema = Joi.object({
  PORT: Joi.number().default(3000),
  NODE_ENV: Joi.string().default('development'),
  firebase: Joi.object({
    project_id: Joi.string().required(),
    private_key: Joi.string().required(),
    client_email: Joi.string().required(),
    database_url: Joi.string().required(),
  }),
});
