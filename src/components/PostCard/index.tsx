import Post from '../../types/post';

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  return <div>{post.id}</div>;
};

export default PostCard;
