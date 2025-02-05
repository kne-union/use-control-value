import React, {useState, useRef} from "react";
import useRefCallback from '@kne/use-ref-callback';

export default (props, map) => {
    map = Object.assign({}, {defaultValue: "defaultValue", value: "value", onChange: "onChange"}, map);
    const isControl = useRef(map["value"] in props), [stateValue, setStateValue] = useState(props[map["defaultValue"]]);
    let currentValue = isControl.current ? props[map["value"]] : stateValue;
    return [currentValue, useRefCallback((newValue, ...others) => {
        const newState = typeof newValue === "function" ? currentValue = newValue(currentValue) : newValue;
        props[map["onChange"]] && props[map["onChange"]](newState, ...others);
        if (!isControl.current) {
            setStateValue(newState);
        }
    })];
};
