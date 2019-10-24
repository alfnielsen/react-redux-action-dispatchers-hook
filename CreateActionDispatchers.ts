import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'

type IActionsMap<T extends Record<keyof T, (...args: any) => any>> = {
   [K in keyof T]: (...args: Parameters<T[K]>) => ReturnType<Dispatch>
}
export const TransformActions = <
   T extends Record<keyof T, (...args: any) => any>
>(
   dispatch: Dispatch,
   actionCreatorMap: T
): IActionsMap<T> => {
   const actionDispatcherMap = {} as IActionsMap<T>
   for (const key of Object.keys(actionCreatorMap) as Array<keyof T>) {
      const item =
         actionCreatorMap[key as keyof typeof actionCreatorMap]
      actionDispatcherMap[key] = (...args: Parameters<typeof item>) =>
         dispatch(item.apply(null, args))
   }
   return actionDispatcherMap
}

const CreateActionDispatchers = <
   T extends Record<keyof T, (...args: any) => any>
>(
   actionCreatorMap: T
) => {
   const dispatch = useDispatch()
   return TransformActions(dispatch, actionCreatorMap)
}

export default CreateActionDispatchers