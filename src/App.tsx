import React from "react";
import "./ui/GlobalStyle";
import { search, Transaction, Filters } from "./transactions/transactions";
import Search from "./Search";
import TransactionsTable from "./TransactionsTable/TransactionsTable";
import Loading from "./ui/Loading";

interface State {
  loading: boolean;
  transactions: Transaction[];
}

class App extends React.Component<{}, State> {
  public state = {
    loading: true,
    transactions: [] as Transaction[]
  };

  public componentDidMount() {
    search().then(transactions => {
      this.setState({ transactions, loading: false });
    });
  }

  public handleSearch = (filters: Filters) => {
    search(filters).then(transactions => {
      this.setState({ transactions });
    });
  };

  public render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <div>
        <Search onSearch={this.handleSearch} />
        <TransactionsTable transactions={this.state.transactions} />
      </div>
    );
  }
}

export default App;
