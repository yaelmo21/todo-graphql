import * as Joi from 'joi';

export const EnvValidationSchema = Joi.object({
  PORT: Joi.number().default(3000),
  NODE_ENV: Joi.string().default('development'),
  firebase: Joi.object({
    type: Joi.string(),
    project_id: Joi.string(),
    private_key_id: Joi.string(),
    private_key: Joi.string(),
    client_email: Joi.string(),
    client_id: Joi.string(),
    auth_uri: Joi.string(),
    token_uri: Joi.string(),
    auth_provider_x509_cert_url: Joi.string(),
    client_x509_cert_url: Joi.string(),
    universe_domain: Joi.string(),
    database_url: Joi.string(),
  }),
});
