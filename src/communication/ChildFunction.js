import React from 'react'

export default function ChildFunction(props) {
    console.log(props)
    const { username,age } = props ;
    console.log(username,age)
    return (
        <div>
            <h3>Child Function</h3>
            <p>Username:{username} - Age:{age}</p>
        </div>
    )
}
