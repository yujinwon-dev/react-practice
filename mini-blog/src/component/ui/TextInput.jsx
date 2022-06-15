import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  width: calc(100% - 32px);
  ${(props) => props.height && `height: ${props.height}px;`}
  padding: 1rem;
  font-size: 1rem;
  line-height: 20px;
`;

export default function TextInput({ height, value, onChange }) {
  return <StyledTextArea height={height} value={value} onChange={onChange} />;
}