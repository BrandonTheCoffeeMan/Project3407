import * as yup from 'yup';

export default yup.object().shape({
    
    email:
        yup
            .string()
            .email('Email must be valid.')
            .required('*')
            .max(255, 'Email must be 255 characters for less.'),

    password:
        yup
            .string()
            .required('*')
            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Must contain 8 characters, one uppercase, one lowercase, one number, and one special character')
})