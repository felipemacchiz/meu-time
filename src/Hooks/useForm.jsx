import React from "react";

const useForm = () => {
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState(null);

    function validate() {
        if (!value.length) {
            setError("Campo obrigatório");
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function onChange({target}) {
        validate(target.value);
        setValue(target.value);
    }

    return {
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
    }
}

export default useForm;