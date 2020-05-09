# useControlValue
实现了同时支持受控和非受控组件状态管理的hooks

```shell script
npm i @kne/use-control-value
```

# 使用说明

```jsx
import useControlValue from '@kne/use-control-value';

const SomeComponent = (props)=>{
  const [value,setValue] = useControlValue(props);
  return (
    <input type="text" value={value} onChange={(e)=>{
      setValue(e.target.value);
    }}/> 
  );
};
```

上述例子中创建的组件SomeComponent，当给他传入defaultValue时表现为一个非受控组件，给他传value时表现为一个受控组件
