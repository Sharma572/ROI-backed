export const validate = (schema) => (req, _res, next) => {
  const { error, value } = schema.validate(req.body, { abortEarly: false, stripUnknown: true, convert: true });
  if (error) {
    const msg = error.details.map(d => d.message).join("; ");
    const e = new Error(msg);
    e.status = 422;
    return next(e);
  }
  req.body = value;
  next();
};