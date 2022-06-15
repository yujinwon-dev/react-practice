import styled from 'styled-components';
import PostListItem from './PostListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

export default function PostList({ posts, onClickItem }) {
  return (
    <Wrapper>
      {posts.map(post => (
        <PostListItem
          key={post.id}
          post={post}
          onClick={() => onClickItem(post)}
        />
      ))}
    </Wrapper>
  );
}
