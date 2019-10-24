"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
exports.TransformActions = (dispatch, actionCreatorMap) => {
    const actionDispatcherMap = {};
    for (const key of Object.keys(actionCreatorMap)) {
        const item = actionCreatorMap[key];
        actionDispatcherMap[key] = (...args) => dispatch(item.apply(null, args));
    }
    return actionDispatcherMap;
};
const CreateActionDispatchers = (actionCreatorMap) => {
    const dispatch = react_redux_1.useDispatch();
    const memoDispatchActionsObject = react_1.useMemo(() => exports.TransformActions(dispatch, actionCreatorMap), [exports.TransformActions, dispatch, actionCreatorMap]);
    return memoDispatchActionsObject;
};
exports.default = CreateActionDispatchers;
//# sourceMappingURL=CreateActionDispatchers.js.map