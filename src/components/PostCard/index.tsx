import Post from '../../types/post';
import { Avatar, Space, Tag } from 'antd';
import styled from 'styled-components';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

declare module 'dayjs' {
  interface Dayjs {
    fromNow(withoutSuffix?: boolean): string;
  }
}

const PostAuthor = styled.div`
  display: flex;
  align-items: center;
`;

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  return (
    <>
      <PostAuthor>
        <Space>
          <Avatar src={<img src={post.author.avatar} alt="avatar" />} />
          <div>{post.author.name}</div>
        </Space>
      </PostAuthor>
      <div>{dayjs(post.publishDate).fromNow()}</div>
      <div>{post.title}</div>
      <div>{post.summary}</div>
      {post.categories.map((category) => (
        <Tag>{category.name}</Tag>
      ))}
    </>
  );
};

export default PostCard;
