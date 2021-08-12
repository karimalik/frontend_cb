export const SUCCESS = "success";
export const WARNING = "warning";
export const ERROR = "error";
export const INFO = "info";

export const APPLICATION_IS_READY = "APPLICATION_IS_READY";
export const APPLICATION_IS_LOADING = "APPLICATION_IS_LOADING";

export const LOGOUT = "LOGOUT";
export const logout = () => ({
  type: LOGOUT,
});

export const AFTER_LOGIN = "AFTER_LOGIN";
export const afterLogin = (values) => ({
  type: AFTER_LOGIN,
  payload: { values },
});

export const loadApplication = () => ({
  type: APPLICATION_IS_READY,
  isReady: true,
});

export const loadingData = (isLoading) => ({
  type: APPLICATION_IS_LOADING,
  isLoading,
});
