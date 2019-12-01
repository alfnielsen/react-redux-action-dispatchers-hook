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
exports.useCreateArea = (actionCreatorMap, selector) => {
    const dispatch = react_redux_1.useDispatch();
    const properties = react_redux_1.useSelector(selector);
    const transformedActions = exports.TransformActions(dispatch, actionCreatorMap);
    return Object.assign(Object.assign({}, properties), transformedActions);
};
const useCreateActionDispatchers = (actionCreatorMap) => {
    const dispatch = react_redux_1.useDispatch();
    const transformedActions = exports.TransformActions(dispatch, actionCreatorMap);
    return transformedActions;
};
exports.default = useCreateActionDispatchers;
//# sourceMappingURL=CreateActionDispatchers.js.map