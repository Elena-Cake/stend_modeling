import React from "react";
import { useState, useCallback } from "react";

export function useFormAndValidation() {
    const [values, setValues] = useState({});

    const handleChange = (event) => {
        const { value, name } = event.target;
        setValues({ ...values, [name]: value });
    };

    const resetForm = useCallback((newValues = {}) => {
        setValues(newValues);
    }, [setValues]);

    return { values, handleChange, resetForm, setValues };
}