# react-redux-create-action-dispatchers

## Description

**Short:** `Transform action creators into action dispatchers`

This simple make the code a tiny more clean. (See example's)

## Example

[See demo here](https://codesandbox.io/s/hardcore-snow-jql32?fontsize=14) _(editable codesandbox.io)_

```ts
import React, { FC } from "react";

import useCreateActionDispatchers from "react-redux-action-dispatchers-hook";

const MyActionCreators = {
  action1: (name: string) => ({ type: "action1", name }),
  action2: (num: number) => ({ type: "action2", num })
};

export const useMyActions = () => useCreateActionDispatchers(MyActionCreators);

export const MyComponent: FC = () => {
  const { action1, action2 } = useMyActions();
  return (
    <div>
      <button onClick={() => action1("SomeName")}>Action 1</button>
      <button onClick={() => action2(42)}>Action 2</button>
    </div>
  );
};
```

Or you can add properties for the area with **useCreateArea**

```ts
import { useCreateArea } from "react-redux-action-dispatchers-hook";
//(...)

export const useMyActions = () =>
  useCreateArea(MyActionCreators, (state: IStore) => state.area);

export const MyComponent: FC = () => {
  const { prop1, prop2, action1, action2 } = useMyActions();
  return (
    <div>
      <button onClick={() => action1("SomeName")}>{prop1}</button>
      <button onClick={() => action2(42)}>{prop2}</button>
    </div>
  );
};
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
  action1: (name: string) => ({ type: "action1", name }),
  action2: (num: number) => ({ type: "action2", num })
};
```

Or

```ts
// action-creators are defined other place
const MyActionCreators = {
  action1,
  action2
};
```

### 2) Create hook from

Create hook by passing the plainObject into CreateActionDispatchers

```ts
import CreateActionDispatchers from "react-redux-action-dispatchers-hook";

export const useMyActions = () => CreateActionDispatchers(MyActionCreators);
```

### 3) Use you new actions

The action dispatcher can now be called the same way as the original action creators,
but they will also dispatch them (using reacts `useDispatch`)

```ts
const MyComponent: FC = () => {
  const { action1, action2 } = useMyActions();
  return (
    <div>
      <button onClick={() => action1("SomeName")}>Action 1</button>
      <button onClick={() => action2(42)}>Action 2</button>
    </div>
  );
};
```

### How it does it

The code below does the same thing.

As you can see, the only thing `react-redux-action-dispatchers-hook` does is making the code a little more clean.

```ts
const MyComponent: FC = () => {
  const dispatch = useDispatch();
  const { action1, action2 } = MyActionCreators;
  return (
    <div>
      <button onClick={() => dispatch(action1("SomeName"))}>Action 1</button>
      <button onClick={() => dispatch(action2(42))}>Action 2</button>
    </div>
  );
};
```
