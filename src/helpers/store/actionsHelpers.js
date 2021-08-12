const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

export const generateSimpleAction = (type, defaultValues = {}) => (payload) => {
  let payloadObject = payload;

  if (typeof payload !== "object" || Array.isArray(payload)) {
    payloadObject = { payload };
  }

  return {
    ...defaultValues,
    ...payloadObject,
    type,
  };
};

export const createRequestTypes = (base) =>
  [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    const newAcc = acc;

    newAcc[type] = `${base}_${type}`;

    newAcc.prefix = base;

    return newAcc;
  }, {});
export const generateRequestActions = (key) => ({
  request: (actionParams) => generateSimpleAction(key.REQUEST)(actionParams),
  success: (payload, actionParams) =>
    generateSimpleAction(key.SUCCESS)({ payload, actionParams }),
  failure: (error, actionParams) =>
    generateSimpleAction(key.FAILURE)({ error, actionParams }),
});