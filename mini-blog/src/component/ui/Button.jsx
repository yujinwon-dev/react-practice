import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-width: 1px;
  border-radius: 8px;
  cursor: pointer;
`;

export default function Button({ title, onClick }) {
  return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}
