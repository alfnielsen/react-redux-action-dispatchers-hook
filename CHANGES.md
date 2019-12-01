## 0.0.9+0.0.10

rebuild without useMemo and rename to useCreateActionDispatchers (again!)
to try to follow the use hook rules fot linter.

### Add useCreateArea

Higher level method added: **useCreateArea**

It does the same as **useCreateActionDispatchers**, but takes a second argument: **selector function**

This will create a

```ts
const { ...properties, ...actions } = useMyHook();
```

## 0.0.8

rename back to CreateActionDispatchers

Add demo (https://codesandbox.io/ link in README)

## 0.0.7

rename CreateActionDispatchers to useCreateActionDispatchers

(To ensure linters will accept it)

## 0.0.6

Removed unused memo

## 0.0.5

Create first version
