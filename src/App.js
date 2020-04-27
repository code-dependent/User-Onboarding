import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Members from './components/Members';
import axios from 'axios';
import * as yup from 'yup';


const url = 'https://reqres.in/api/users'
const initialFormValues ={
  name:'',
  email:'',
  password:'',
  role:'',
  terms:false,

}
const initialFormErrors = {
  name: '',
  email: '',
  password:'',
  role: '',
  terms:''
}

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2,'Name Must Consist of, at Least, TWO Characters')
    .required('Name Field is Required'),
  email: yup
    .string()
    .email('Please Enter a VALID Email Address')
    .required('An Email Address is Required'),
  password: yup
    .string()
    .min(6,'Password Must Be, at Least, SIX Characters Long')
    .required('A Valid Password is Required'),
  role: yup
    .string()
    .required('Please Select a Role'),
  terms: yup
    .boolean()
    .oneOf([true], 'Must Accept Terms and Conditions'),

})
function App() {
  const [users, setUsers]=useState([])
  const [formValues, setFormValues]=useState(initialFormValues)
  const [formDisabled, setFormDisabled]=useState(true)
  const [formErrors, setFormErrors]=useState(initialFormErrors)

// Checkbox Handle & validator
  const onCheckboxChange = event=>{
    const {name} = event.target;
    const isChecked = event.target.checked;
    
    setFormValues({
      ...formValues,
        [name]: isChecked,
      })
    yup.reach(formSchema, name).validate(isChecked)
    .then(valid=>{
      setFormValues({
        ...formValues,
        [name]:isChecked
      })
      setFormErrors({
        ...formErrors,
        [name]:''
      })
    })
    .catch(err=>{
      setFormErrors({
        ...formErrors,
        [name]:err.errors[0]
      })
    })

  }
// on input change handler 
  const onInputChange = (event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setFormValues({
      ...formValues,
      [name]:value
    })
    yup.reach(formSchema, name).validate(value)
    .then(valid=>{
      setFormErrors({
        ...formErrors,
        [name]:''
      })
    })
    .catch(err=>{
      setFormErrors({
        ...formErrors,
        [name]:err.errors[0]
      })
    })
    
  }
  
  useEffect(()=>{
    formSchema.isValid(formValues)
    .then(valid=>{
      setFormDisabled(!valid)
    })
  },[formValues])

  const onSubmit = (event)=>{
    event.preventDefault()
    const newUser = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      role: formValues.role
    }
    axios.post(url, newUser)
    .then(res=>{
      return setUsers([...users, res.data])
      // console.log(res.data)
    })
    .catch(err => {
      debugger
    })
    setFormValues(initialFormValues)
    // console.log(users)
  }
  // console.log(users)

  
  
  return (
    <div className="App">
      <Form 
        formValues={formValues} 
        onInputChange={onInputChange} 
        onSubmit={onSubmit} 
        errors={formErrors}
        formDisabled={formDisabled} 
        onChecked={onCheckboxChange}/>

        <Members users={users}/>
    </div>
  );
}

export default App;
