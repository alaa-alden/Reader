import React from 'react'
import Router from 'next/router'
const index = () => {
    React.useEffect(()=>{
        Router.push('/text')
    })
    return (
        <div></div>
    )
}

export default index
