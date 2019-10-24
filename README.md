# react-redux-create-action-dispatchers

## Description

**Short:** `Transform action creators into action dispatchers`

This simple make the code i tiny more clean. (See example's)

## Example

```ts
import React, { FC } from 'react'

import CreateActionDispatchers from 'react-redux-action-dispatchers-hook'

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
```

## Install

```sh
npm install react-redux-action-dispatchers-hook
```

Or

```sh
yarn add react-redux-action-dispatchers-hook
```

## Usage

### 1) Create hook from

Create a plainObject with all your action creators like 'MyActionCreators'

```ts
const MyActionCreators = {
   action1: (name: string) => ({ type: 'action1', name }),
   action2: (num: number) => ({ type: 'action2', num })
}
```

Or

```ts
// action-creators are defined other place
const MyActionCreators = {
   action1,
   action2
}
```

### 2) Create hook from

Create hook by passing the plainObject into CreateActionDispatchers

```ts
import CreateActionDispatchers from 'react-redux-action-dispatchers-hook'

export const useMyActions = () => CreateActionDispatchers(MyActionCreators)
```

### 3) Use you new actions

The action dispatcher can now be called the same way as the original action creators,
but they will also dispatch them (using reacts `useDispatch`)

```ts
const MyComponent: FC = () => {
   const { action1, action2 } = useMyActions()
   return (
      <div>
         <button onClick={() => action1('SomeName')}>Action 1</button>
         <button onClick={() => action2(42)}>Action 2</button>
      </div>
   )
}
```

### How it does it

The code below does the same thing.

As you can see, the only thing `react-redux-action-dispatchers-hook` does is making the code a little more clean.

```ts
const MyComponent: FC = () => {
   const dispatch = useDispatch()
   const { action1, action2 } = MyActionCreators
   return (
      <div>
         <button onClick={() => dispatch(action1('SomeName'))}>Action 1</button>
         <button onClick={() => dispatch(action2(42))}>Action 2</button>
      </div>
   )
}
```
