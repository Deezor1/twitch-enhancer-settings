import React from 'react';
import styled from 'styled-components';

const Radio = ({ id, options }) => {
  return (
    <Wrapper>
      {options &&
        options.map((option, i) => {
          return (
            <>
              <Input key={i} type='radio' name={id} id={`${id}-${option.id}`} />
              <Label for={`${id}-${option.id}`}>
                <span>{option.name}</span>
              </Label>
            </>
          );
        })}
    </Wrapper>
  );
};

export default Radio;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  background: var(--bg-color-light);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  ${Input}:checked + & {
    color: var(--bg-color-light);
    background: var(--purple-color);
  }
`;
