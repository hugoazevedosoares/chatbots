import createPersistedState from "use-persisted-state";

const LOCAL_ORDER_KEY = "LOCAL_ORDER_KEY";
const LOCAL_LAYOUT_KEY = "LOCAL_LAYOUT_KEY";

export const useOrderState = createPersistedState(LOCAL_ORDER_KEY);
export const useLayoutState = createPersistedState(LOCAL_LAYOUT_KEY);
