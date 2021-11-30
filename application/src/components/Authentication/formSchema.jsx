import * as yup from 'yup';

export default yup.object().shape({
    username:
        yup
            .string()
            .required('*')
            .max(50, 'Username must be 50 characters or less.')
            .min(5, 'Username must be 5 characters or more'),
    
    email:
        yup
            .string()
            .email()
            .required('*')
            .max(255, 'Email must be 255 characters for less.')
            .matches(/^[aA-zZ\s]+$/, 'Email must be valid'),

    tag:
        yup
            .string()
            .max(15, 'Handle must be 15 characters or less.')
            .matches(/^[A-Za-z0-9_]+$/, "Handle can only contain alphanumeric characters and underscores."),

    password:
        yup
            .string()
            .required('*')
            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Must contain 8 characters, one uppercase, one lowercase, one number, and one special character')
})