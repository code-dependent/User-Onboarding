import React from 'react';

const Form = (props)=>{

    const centerForms = {
        marginBottom:'5%',
        marginLeft:'auto',
        marginRight:'auto',
        
    }
    const errorStyle = {
        position:'absolute',
        color:'red',
        top:'',
        left:'110%',
        fontSize:'75%',
        width: '50%'
    }
    console.log(props.errors)


    return(
        
        <div style={{
            marginTop:'17%'
        }}>
            
            <div style={errorStyle}>
                <p>{props.errors.name}</p>
                <p>{props.errors.email}</p>
                <p>{props.errors.password}</p>
                <p>{props.errors.terms}</p>
            </div>
            <form style={{display:'flex',flexDirection:'column'}}>
                <label style={centerForms}> Name:&nbsp;
                    <input 
                        type='text' 
                        name='name' 
                        value={props.formValues.name}
                        onChange={props.onInputChange}/>
                </label>
                <label style={centerForms}> Email:&nbsp;
                    <input 
                        type='text' 
                        name='email' 
                        value={props.formValues.email}
                        onChange={props.onInputChange}/>
                </label>
                <label style={centerForms}> Password:&nbsp;
                    <input 
                        type='text' 
                        name='password' 
                        value={props.formValues.password}
                        onChange={props.onInputChange}/>
                </label>
                <label style={centerForms}> Terms of Service:&nbsp;</label>
                    <input 
                        style={centerForms}
                        type='checkbox' 
                        name='terms' 
                        checked={props.formValues.terms}
                        onChange={props.onChecked}/>
                
                <button className='subBtn' onClick={props.onSubmit} disabled={props.formDisabled}>submit</button>    
            </form>
        </div>
    )
}
export default Form;