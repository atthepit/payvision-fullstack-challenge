import React from "react";

interface Props {
  name: string;
}

class App extends React.Component<Props> {
  render() {
    return <p>Hello {this.props.name}!</p>;
  }
}

export default App;
