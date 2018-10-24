import React, { FormEvent } from "react";
import styled from "react-emotion";
import { Filters } from "./transactions/transactions";
import Select from "./ui/Select";
import Button from "./ui/Button";

interface Props {
  onSearch: (filters: Filters) => void;
}

const StyledForm = styled("form")`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 1rem;
  flex-basis: 100%;
  justify-content: flex-end;

  & > * {
    margin-left: 2%;
  }
`;

class Search extends React.Component<Props> {
  public handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const filters: Filters = {};

    const action = form.elements.namedItem("action");
    if (action) {
      const value = (action as HTMLSelectElement).value;
      if (value) {
        filters.action = value;
      }
    }

    const currencyCode = form.elements.namedItem("currencyCode");
    if (currencyCode) {
      const value = (currencyCode as HTMLSelectElement).value;
      if (value) {
        filters.currencyCode = value;
      }
    }

    this.props.onSearch(filters);
  };

  public render() {
    return (
      <StyledForm onSubmit={this.handleSearchSubmit}>
        <Select name="action" label="Action">
          <option value="">Transaction type</option>
          <option value="payment">Payment</option>
          <option value="credit">Credit</option>
        </Select>

        <Select name="currencyCode" label="Currency Code">
          <option value="">Currency</option>
          <option>EUR</option>
          <option>USD</option>
          <option>JPY</option>
        </Select>

        <Button type="submit">Search</Button>
      </StyledForm>
    );
  }
}

export default Search;
