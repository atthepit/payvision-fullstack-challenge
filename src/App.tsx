import React from "react";
import { search, Transaction, Filters } from "./transactions/transactions";
import Search from "./Search";

interface Props {}

interface State {
  transactions: Transaction[];
}

class App extends React.Component<Props, State> {
  public state = {
    transactions: [] as Transaction[]
  };

  public componentDidMount() {
    search().then(transactions => {
      this.setState({ transactions });
    });
  }

  public handleSearch = (filters: Filters) => {
    search(filters).then(transactions => {
      this.setState({ transactions });
    });
  };

  public render() {
    return (
      <div>
        <Search onSearch={this.handleSearch} />
        <p data-testid="transactions">
          You have {this.state.transactions.length} transactions!
        </p>
      </div>
    );
  }
}

export default App;
