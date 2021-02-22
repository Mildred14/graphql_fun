import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import UserAvatar from './UserAvatar'
import Posts from './Posts'

const GET_POSTS = gql`
  query User($id: ID!) {
    user(id: $id) {
      posts {
        id
        title
      }
    }
  }
`

const User = ({ user, userSelected }) => {
  const { loading, error, data } = useQuery(GET_POSTS, { variables: { id: user.id } })
  if (loading) return 'Loading...'
  if (error) return `Error ${error.message}`

  return (
    <div>
      <button className="bg-gray-200 hover:bg-gray-400 text-gray-900 font-bold py-2 px-4 rounded" onClick={() => userSelected(null)}>Back</button>
      <div className="lg:w-1/3 flex flex-col items-center justify-center w-full p-4 text-center inline">
        <UserAvatar user={user} />
        <Posts posts={data.user.posts} user={user} />
      </div>
    </div>
  )
}

export default User
