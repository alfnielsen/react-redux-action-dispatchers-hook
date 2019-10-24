import React, { FC } from 'react'

import CreateActionDispatchers from './CreateActionDispatchers'

const MyActionCreators = {
   action1: (name: string) => ({ type: 'action1', name }),
   action2: (num: number) => ({ type: 'action2', num })
}

export const useMyActions = () => CreateActionDispatchers(MyActionCreators)

export const MyComponent: FC = () => {
   const { action1, action2 } = useMyActions()
   return (
      <div>
         <button onClick={() => action1('SomeName')}>Action 1</button>
         <button onClick={() => action2(42)}>Action 2</button>
      </div>
   )
}
