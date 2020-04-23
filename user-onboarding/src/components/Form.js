import React from 'react';

const Form = (props)=>{

    return(
        <div>
            <form style={{display:'flex',flexDirection:'column'}}>
                <label> Name:&nbsp;
                    <input 
                        type='text' 
                        name='name' 
                        value={props.formValues.name}
                        onChange={props.onInputChange}/>
                </label>
                <label> Email:&nbsp;
                    <input 
                        type='text' 
                        name='email' 
                        value={props.formValues.email}
                        onChange={props.onInputChange}/>
                </label>
                <label> Password:&nbsp;
                    <input 
                        type='text' 
                        name='password' 
                        value={props.formValues.password}
                        onChange={props.onInputChange}/>
                </label>
                <label> Terms of Service:&nbsp;
                    <input 
                        type='checkbox' 
                        name='terms' 
                        checked={props.formValues.terms}
                        onChange={props.onChecked}/>
                </label>
                <button onClick={props.onSubmit} disabled={props.formDisabled}>submit</button>    
            </form>
        </div>
    )
}
export default Form;