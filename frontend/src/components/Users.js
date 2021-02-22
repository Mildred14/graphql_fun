import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import UserAvatar from './UserAvatar'
import CreateUser from './CreateUser'

const GET_USERS = gql`
  {
    users {
      id
      name
      email
      postsCount
    }
  }
`

const Users = ({ userSelected }) => {
  const { loading, error, data } = useQuery(GET_USERS)
  if (loading) return 'Loading...'
  if (error) return `Error ${error.message}`

  const updateUser = (cache, { data: { createUser } }) => {
    const { users } = cache.readQuery({ query: GET_USERS})
    cache.writeQuery({
      query: GET_USERS,
      data: { users: [...users, createUser.user]}
    })
  }

  return (
    <div className="flex flex-wrap items-center pb-16">
      {data.users.map(user => {
        return (
        <div key={user.id} className="lg:w-1/3 w-full p-4 text-center inline" onClick={() => userSelected(user)}>
          <UserAvatar user={user} />
        </div>
      )})}
      <CreateUser onUpdateUser={updateUser} />
    </div>
  )
}

export default Users;
