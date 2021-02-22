import React from 'react'

const Posts = ({ posts, user }) => {

  return (
    <div className="lg:pl-10 mb-4">
      <h3 className="text-2xl font-bold text-gray-800">Posts from {user.name}</h3>
      {posts.map(post => (
        <div key={post.id}>
          <div className="p-6 shadow mb-4">
            <h4 className="text-x font-bold text-gray-800">{post.title}</h4>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Posts
