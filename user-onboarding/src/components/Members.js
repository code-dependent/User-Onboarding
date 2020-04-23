import React from 'react';

const Members = (props)=>{
    console.log(props)
    return(

    <pre>{JSON.stringify(props.users,null,' ')}</pre>


    )
}

export default Members;