import React from 'react';

const Members = (props)=>{
    console.log(props)
    return(
    <div style={{
        position:'absolute',
        color:'red',
        left: '100%',
        top:'2%'
    }}>
        <pre>{JSON.stringify(props.users,null,' ')}</pre>
    </div>

    )
}

export default Members;