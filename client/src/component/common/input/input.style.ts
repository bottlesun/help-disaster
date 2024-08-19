import styled from "@emotion/styled";

export const InputGroupStyle = styled.div`
  width: 100%;

  fieldset {
    position: relative;
    margin-bottom: 22px;
    max-width: 280px;
    width: 100%;

    & input:focus,
    & input.input-focus {
      padding: 10px 12px 0;
    }

    & input:focus + label,
    & input.input-focus + label {
      top: 12px;
      font-size: 10px;
      color: var(--color-text-blue);
    }

    &.no-label input:focus {
      padding: 0 12px;
    }
  }
`;

export const CommonInputStyle = styled.input`
  width: 100%;
  max-width: 280px;
  height: 45px;
  padding: 0 12px;
  border: 1px solid var(--color-main);
  border-radius: 5px;
  font-size: 12px;

  & :hover {
    border: 1px solid var(--color-main);
  }

  &[data-error="true"] {
    border: 1px solid var(--color-error);
    background: rgba(179, 38, 30, 0.1);
  }

  &[data-error="true"] + label {
    color: var(--color-error);
  }
`;

export const TextLabelStyle = styled.label`
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
  font-size: 12px;
  color: #d9d9d9;
  font-weight: 600;
  transition: all 0.3s;
`;

export const CheckboxStyle = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #fff;
  display: inline-block;
  width: 16px;
  height: 16px;
  cursor: pointer;
  border: 2px solid var(--color-main);

  &::after {
    border: solid var(--color-main);
    border-width: 0 2px 2px 0;
    content: "";
    display: none;
    height: 50%;
    left: 20%;
    position: relative;
    top: 12%;
    transform: rotate(45deg);
    width: 40%;
  }

  &:checked::after {
    display: block;
  }

  &:focus {
    padding: 0 !important;
  }
`;

export const CheckboxLabelStyle = styled.label`
  font-size: 14px !important;
`;

export const CheckboxFieldStyle = styled.fieldset`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5px;
  width: 100%;
  margin: 0 auto;
`;
