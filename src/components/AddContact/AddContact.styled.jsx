import styled from 'styled-components'
import { Form, ErrorMessage } from 'formik';



export const StyledError = styled(ErrorMessage)`
    color: red !important;
`

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 20px;
    width: 200px 
`;








