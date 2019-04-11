const yup = require('yup');

const userPayload = yup.object().shape({
    name: yup.string()
            .trim()
            .min(3, '<name> should be more than 3 characters')
            .max(12, '<name> should be shorter than 12 characters')
            .required('<name> is a required field'),
    email: yup.string()
            .email('<email> is invalid')
            .required('<email> is a required field'),
    password: yup.string()
            .min(8, '<password> should be longer than 8 characters')
            .required('<password> is a required field')
});

module.exports = {
    userPayload
}

