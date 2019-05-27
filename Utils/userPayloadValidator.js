import * as yup from 'yup';

const passwordLiteral = /[^password]/;
const passwordExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#\$%\^\&*\\-]{8,}$/

const userPayload = yup.object().shape({
    name: yup.string()
            .trim()
            .min(3, 'name should be more than 3 characters')
            .max(12, 'name should be shorter than 12 characters')
            .required('name is a required field'),
    email: yup.string()
            .trim()
            .email('email is invalid')
            .required('email is a required field'),
    password: yup.string()
            .trim()
            .min(8, 'password should be longer than 8 characters')
            .required('password is a required field')
            .matches(passwordLiteral, 'password cannot be "password"')
            .matches(passwordExp, 'password must have a 1 number, 1 lowercase and 1 uppercase')
});

const checkUserPayload = async (schema, payload) => {
    try {
        await schema.validate(payload);
    } catch (error) {
        return error        
    }
}

export default {
    userPayload,
    checkUserPayload
}

