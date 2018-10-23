import React from "react";
import { search, Transaction } from "./transactions/transactions";

interface Props {
  name: string;
}

interface State {
  transactions: Transaction[];
}

class App extends React.Component<Props, State> {
  public state = {
    transactions: [] as Transaction[]
  };
  public componentDidMount() {
    search({
      orderBy: "-date"
    }).then(transactions => {
      this.setState({ transactions });
    });
  }
  render() {
    return (
      <div>
        <p>Hello {this.props.name}!</p>
        <p>You have {this.state.transactions.length} transactions!n</p>
      </div>
    );
  }
}

export default App;
