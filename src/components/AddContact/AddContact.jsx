import { Formik, Field } from 'formik';
import { StyledForm, StyledError } from './AddContact.styled';
import * as Yup from 'yup';



const phoneRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(phoneRegExp, 'Enter a valid number')
    .required('Required'),
  
});



export const AddContact = ({addContact}) =>{
    return(
        <Formik
        initialValues={{
          name: '',
          number: '',
         
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          addContact(values.name, values.number)
          resetForm({values: ''})
        }}
      >
        <StyledForm>
          <label htmlFor="name">Name
            <Field id="name" type="text" name="name" placeholder="Name" />
            <StyledError name='name' component='span'/>
          </label>

          <label htmlFor="number">Number
            <Field 
              id="number" 
              name="number" 
              type="tel" 
              placeholder="Number" 
            />
            <StyledError name='number' component='span'/>
          </label>

         
          <button type="submit">Add contact</button>
        </StyledForm>
      </Formik>
    )
}