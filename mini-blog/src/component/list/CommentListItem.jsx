import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  background: #fff;

  :hover {
    background: lightgrey;
  }
`;

const ContentText = styled.p`
  font-size: 14px;
`;

export default function CommentListItem({ comment }) {
  return (
    <Wrapper>
      <ContentText>{comment.content}</ContentText>
    </Wrapper>
  );
}
