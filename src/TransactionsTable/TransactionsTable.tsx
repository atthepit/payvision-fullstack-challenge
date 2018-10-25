import React from "react";
import { css } from "react-emotion";
import Row from "../ui/Row";
import breakPoints from "../ui/breakPoints";
import { Transaction } from "../transactions/transactions";
import EmptySearch from "./EmptySearch";
import { mobileHidden, alignRight } from "./commonStyles";
import TableContainer from "./TableContainer";
import ColumnName from "./ColumnName";
import TransactionRow from "./TransactionRow";

const heading = css`
  padding: 1rem;
`;

interface Props {
  transactions: Transaction[];
}

interface State {
  nameSpan: number;
  actionSpan: number;
  amountSpan: number;
  currencyCodeSpan: number;
  openDetailsId: string;
}

class TransactionsTable extends React.Component<Props, State> {
  public state = {
    ...this.getColumnWidths(),
    openDetailsId: ""
  };
  public componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize, true);
  }
  public componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize, true);
  }
  public handleTransactionClick = (id: string) => {
    this.setState({ openDetailsId: id });
  };
  private handleWindowResize = () => {
    this.setState(this.getColumnWidths());
  };
  private getColumnWidths() {
    if (window.innerWidth < breakPoints.tablet) {
      return {
        nameSpan: 5,
        actionSpan: 4,
        amountSpan: 2,
        currencyCodeSpan: 2
      };
    } else {
      return {
        nameSpan: 3,
        actionSpan: 2,
        amountSpan: 1,
        currencyCodeSpan: 1
      };
    }
  }
  public render() {
    const { nameSpan, actionSpan, amountSpan, currencyCodeSpan } = this.state;
    return (
      <TableContainer>
        <Row className={heading}>
          <ColumnName span={nameSpan}>Name</ColumnName>
          <ColumnName className={mobileHidden} span={2}>
            Brand
          </ColumnName>
          <ColumnName className={mobileHidden} span={3}>
            Last 4 digits
          </ColumnName>
          <ColumnName span={actionSpan}>Transaction type</ColumnName>
          <ColumnName className={alignRight} span={amountSpan}>
            Amount
          </ColumnName>
          <ColumnName span={currencyCodeSpan}>Currency</ColumnName>
        </Row>
        <div>
          {this.props.transactions.length === 0 ? (
            <EmptySearch>We have no transactions for that search</EmptySearch>
          ) : (
            this.props.transactions.map(transaction => (
              <TransactionRow
                key={transaction.id}
                id={transaction.id}
                name={transaction.card.holderName}
                brand={transaction.brandId}
                action={transaction.action}
                amount={transaction.amount}
                currencyCode={transaction.currencyCode}
                brandId={transaction.brandId}
                trackingCode={transaction.trackingCode}
                lastFourDigits={transaction.card.lastFourDigits}
                expiryMonth={transaction.card.expiryMonth}
                expiryYear={transaction.card.expiryYear}
                firstSixDigits={transaction.card.firstSixDigits}
                showDetails={this.state.openDetailsId === transaction.id}
                handleClick={this.handleTransactionClick}
                nameSpan={nameSpan}
                actionSpan={actionSpan}
                amountSpan={amountSpan}
                currencyCodeSpan={currencyCodeSpan}
              />
            ))
          )}
        </div>
      </TableContainer>
    );
  }
}

export default TransactionsTable;
