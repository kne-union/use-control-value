import React, {useState, useRef} from "react";

export default (props, map = {defaultValue: "defaultValue", value: "value", onChange: "onChange"}) => {
    const isControl = useRef(map["value"] in props), [stateValue, setStateValue] = useState(props[map["defaultValue"]]);
    const currentValueRef = useRef(null);
    currentValueRef.current = isControl.current ? props[map["value"]] : stateValue;
    return [currentValueRef.current, (newValue, ...others) => {
        const newState = typeof newValue === "function" ? currentValueRef.current = newValue(currentValueRef.current) : newValue;
        props[map["onChange"]] && props[map["onChange"]](newState, ...others);
        if (!isControl.current) {
            setStateValue(newState);
        }
    }];
};
