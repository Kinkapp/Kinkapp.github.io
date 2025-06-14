import styled from 'styled-components';

// Styled button from your example (for reference)
export const StyledButton = styled.button`
  padding: 17px 40px;
  border-radius: 10px;
  border: 0;
  background-color: rgb(255, 56, 86);
  letter-spacing: 1.5px;
  font-size: 15px;
  transition: all 0.3s ease;
  box-shadow: rgb(201, 46, 70) 0px 10px 0px 0px;
  color: hsl(0, 0%, 100%);
  cursor: pointer;
  margin: 10px;

  &:hover {
    box-shadow: rgb(201, 46, 70) 0px 7px 0px 0px;
  }

  &:active {
    background-color: rgb(255, 56, 86);
    box-shadow: rgb(201, 46, 70) 0px 0px 0px 0px;
    transform: translateY(5px);
    transition: 200ms;
  }
`;

// Styled input text box to match button style
export const StyledInput = styled.input.attrs({ type: 'text' })`
  padding: 17px 40px;
  border-radius: 10px;
  border: none;
  background-color: rgb(255, 56, 86);
  letter-spacing: 1.5px;
  font-size: 15px;
  box-shadow: rgb(201, 46, 70) 0px 10px 0px 0px;
  color: hsl(0, 0%, 100%);
  cursor: text;
  margin: 10px;
  outline: none;
  width: 100px

  &::placeholder {
    color: hsl(0, 0%, 90%);
  }

  &:focus {
    box-shadow: rgb(201, 46, 70) 0px 7px 0px 0px;
  }
`;

// Styled range input (dial) to visually match button style
export const StyledRange = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  width: 250px;
  height: 24px;
  margin: 10px;
  background: transparent;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    height: 24px;
    background: rgb(255, 56, 86);
    border-radius: 10px;
    box-shadow: rgb(201, 46, 70) 0px 10px 0px 0px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    background: hsl(0, 0%, 100%);
    border-radius: 50%;
    box-shadow: 0 0 5px rgb(201, 46, 70);
    margin-top: -1px;
    transition: background 0.3s ease;
  }

  &:hover::-webkit-slider-thumb {
    background: rgb(255, 56, 86);
  }

  &:active::-webkit-slider-thumb {
    background: rgb(220, 40, 65);
  }

  /* Firefox */
  &::-moz-range-track {
    height: 24px;
    background: rgb(255, 56, 86);
    border-radius: 10px;
    box-shadow: rgb(201, 46, 70) 0px 10px 0px 0px;
  }

  &::-moz-range-thumb {
    width: 24px;
    height: 24px;
    background: hsl(0, 0%, 100%);
    border-radius: 50%;
    box-shadow: 0 0 5px rgb(201, 46, 70);
    transition: background 0.3s ease;
  }

  &:hover::-moz-range-thumb {
    background: rgb(255, 56, 86);
  }

  &:active::-moz-range-thumb {
    background: rgb(220, 40, 65);
  }
`;
