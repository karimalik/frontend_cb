import { createSelector } from "reselect";
import get from "lodash/get";

const applicationSelector = (state) => get(state, "application");

export const isReadySelector = createSelector(
  applicationSelector,
  (application) => get(application, "isReady", false)
);
