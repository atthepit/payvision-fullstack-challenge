import React, { FormEvent } from "react";
import { Filters } from "./transactions/transactions";

interface Props {
  onSearch: (filters: Filters) => void;
}

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
      <form onSubmit={this.handleSearchSubmit}>
        <label htmlFor="action">Action</label>
        <select name="action" id="action">
          <option value="">Transaction type</option>
          <option value="payment">Payment</option>
          <option value="credit">Credit</option>
        </select>

        <label htmlFor="currencyCode">Currency Code</label>
        <select name="currencyCode" id="currencyCode">
          <option value="">Currency</option>
          <option>EUR</option>
          <option>USD</option>
          <option>JPY</option>
        </select>

        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Search;
