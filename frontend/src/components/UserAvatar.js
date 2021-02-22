import React from 'react'
import Gravatar from 'react-gravatar'

const UserAvatar = ({user}) => {
  return (
    <React.Fragment>
      <Gravatar email={user.email} size={200} className="rounded-full text-center inline"/>
      <div>
        <p className="font-bold">{user.name}</p>
        <p>{user.email}</p>
        <p>{user.postsCount}</p>
      </div>
    </React.Fragment>
  )
}

export default UserAvatar
