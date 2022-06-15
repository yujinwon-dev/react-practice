import styled from 'styled-components';
import CommentListItem from './CommentListItem';

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

export default function CommentList({ comments }) {
  return (
    <Wrapper>
      {comments.map(comment => (
        <CommentListItem key={comment.id} comment={comment} />
      ))}
    </Wrapper>
  );
}
