"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
exports.TransformActions = (dispatch, actionCreatorMap) => {
    const actionDispatcherMap = {};
    for (const key of Object.keys(actionCreatorMap)) {
        const item = actionCreatorMap[key];
        actionDispatcherMap[key] = (...args) => dispatch(item.apply(null, args));
    }
    return actionDispatcherMap;
};
const useCreateActionDispatchers = (actionCreatorMap) => {
    const dispatch = react_redux_1.useDispatch();
    return exports.TransformActions(dispatch, actionCreatorMap);
};
exports.default = useCreateActionDispatchers;
//# sourceMappingURL=CreateActionDispatchers.js.map