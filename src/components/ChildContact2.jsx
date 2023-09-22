import React, { useContext } from 'react'
import { UserContext } from '../views/Contacts'

export default function ChildContact2() {
    const user = useContext(UserContext)
    return (
        <div>
            <h3>ChildContact2</h3>
            {user} in child 2
        </div>
    )
}
