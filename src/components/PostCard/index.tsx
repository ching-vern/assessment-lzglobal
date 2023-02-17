import { Avatar, Space, Tag } from 'antd';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import styled, { keyframes } from 'styled-components';

import Post from '../../types/post';

dayjs.extend(relativeTime);

declare module 'dayjs' {
  interface Dayjs {
    fromNow(withoutSuffix?: boolean): string;
  }
}

const keyframe = keyframes`
  0% {
    letter-spacing: 1px;
    -webkit-filter: blur(3px);
            filter: blur(3px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
`;

const Container = styled.div`
  background-color: #ffffff;
  border-radius: 30px;
  padding: 25px 36px;
  margin-bottom: 18px;
  box-shadow: 0 4px 8px 0 rgba(193, 231, 254, 0.2),
    0 6px 20px 0 rgba(193, 231, 254, 0.19);
  -webkit-animation: ${keyframe} 0.7s;
  animation: ${keyframe} 0.7s;
`;

const PostAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
`;

const PublishDate = styled.div`
  font-size: 12px;
  color: #b2b2b2;
  padding-top: 1px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 6px;
  color: #383838;
`;

const Summary = styled.div`
  margin-bottom: 12px;
  color: #616161;
`;

const AuthorName = styled.div`
  font-size: 13px;
  font-weight: 600;
`;

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Container>
      <PostAuthor>
        <Space>
          <Avatar
            size={22}
            src={<img src={post.author.avatar} alt="avatar" />}
          />
          <AuthorName>{post.author.name}</AuthorName>
          <PublishDate>{dayjs(post.publishDate).fromNow()}</PublishDate>
        </Space>
      </PostAuthor>
      <Title>{post.title}</Title>
      <Summary>{post.summary}</Summary>
      <Space size={[0, 4]} wrap>
        {post.categories.map((category) => (
          <Tag color="#a6c9de">{category.name}</Tag>
        ))}
      </Space>
    </Container>
  );
};

export default PostCard;
