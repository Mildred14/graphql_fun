import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo'

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(input: { name: $name, email: $email }) {
      user {
        id
        name
        email
        postsCount
      }
      errors
    }
  }
`

const CreateUser = ({ onUpdateUser }) => {
  const [createUser] = useMutation(CREATE_USER, { update: onUpdateUser })
  const [userName , setUserName] = useState('')
  const [userEmail , setUserEmail] = useState('')

  const SubmitCreateUser = e => {
    e.preventDefault()
    createUser({ variables: { name:  userName, email: userEmail }})
    setUserName('')
    setUserEmail('')
  }

  return (
    <div>
      <form className="lg:px-8 pt-2 pb-2" onSubmit={e => SubmitCreateUser(e)}>
        <input className="border rounded w-full py-2 px-3"
               type="text" value={userName} onChange={e => setUserName(e.target.value)}
               placeholder="Name" />
        <input className="border rounded w-full py-2 px-3"
               type="text" value={userEmail} onChange={e => setUserEmail(e.target.value)}
               placeholder="Email" />
        <button type="submit">Create User</button>
      </form>
    </div>
  )
}

export default CreateUser
