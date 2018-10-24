import React, { ChangeEvent } from "react";
import styled from "react-emotion";

interface Props {
  name: string;
  label: string;
  onChange?: (event: ChangeEvent) => void;
}

const HiddenLabel = styled("label")`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const StyledSelect = styled("select")`
  border: 1px solid #213d8f;
  color: #213d8f;
  font-weight: 600;
  padding: 0.4rem;
`;

const noop = () => {
  return;
};

class Select extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <HiddenLabel htmlFor={this.props.name}>{this.props.label}</HiddenLabel>
        <StyledSelect
          name={this.props.name}
          id={this.props.name}
          onChange={this.props.onChange || noop}
          onBlur={this.props.onChange || noop}
        >
          {this.props.children}
        </StyledSelect>
      </React.Fragment>
    );
  }
}

export default Select;
