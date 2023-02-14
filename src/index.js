import React, {useState, useRef} from "react";

export default (props, map = {defaultValue: "defaultValue", value: "value", onChange: "onChange"}) => {
    const isControl = useRef(map["value"] in props), [stateValue, setStateValue] = useState(props[map["defaultValue"]]);
    const controlValueRef = useRef(null);
    controlValueRef.current = props[map["value"]];
    return [isControl.current ? props[map["value"]] : stateValue, (newValue, ...others) => {
        const newState = typeof newValue === "function" ? controlValueRef.current = newValue(controlValueRef.current) : newValue;
        props[map["onChange"]] && props[map["onChange"]](newState, ...others);
        if (!isControl.current) {
            setStateValue(newState);
        }
    }];
};
