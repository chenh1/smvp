const serializeForm = (form) => {
    let fields = {};

    [...form.querySelectorAll('input:not([type=submit])')]
        .forEach(field => {
            fields[field.name] = field.value;
        });
    
    return fields;
};

export default serializeForm;