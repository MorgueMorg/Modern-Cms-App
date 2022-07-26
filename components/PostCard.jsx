import React from 'react'

const PostCard = ({ post }) => {
  return (
    <div>
        {post.title}
        {post.excerpt}
    </div>
  )
}

export default PostCard