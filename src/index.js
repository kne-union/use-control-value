/**
 * @name: useControlValue ;
 * @author: admin ;
 * @description: 实现了同时支持受控和非受控组件状态管理的hooks ;
 * */

import React, {useState, useRef} from 'react';

export default (props, map = {defaultValue: 'defaultValue', value: 'value'}) => {
  const isControl = useRef(map['value'] in props),
    [stateValue, setStateValue] = useState(props[map['defaultValue']]);
  return [
    isControl.current ? props[map['value']] : stateValue,
    (newValue, ...others) => {
      props.onChange && props.onChange(newValue, ...others);
      if (!isControl.current) {
        setStateValue(newValue);
      }
    }
  ];
};