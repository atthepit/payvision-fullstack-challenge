import React, { MouseEvent } from "react";
import RowContainer from "./RowContainer";
import Transaction from "./Transaction";
import ColumnText from "./ColumnText";
import DetailsContainer from "./DetailsContainer";
import Details from "./Details";
import DetailsColumn from "./DetailsColumn";
import DetailsProperty from "./DetailsProperty";
import PropertyTitle from "./PropertyTitle";
import {
  mobileHidden,
  capitalize,
  alignRight,
  showMobile,
  hidden
} from "./commonStyles";

interface Props {
  showDetails: boolean;
  handleClick?: (id: string) => void;
  id: string;
  name: string;
  brand: number;
  lastFourDigits: string;
  action: string;
  amount: number;
  currencyCode: string;
  trackingCode: string;
  brandId: number;
  firstSixDigits: string;
  expiryMonth: string;
  expiryYear: string;
  nameSpan: number;
  actionSpan: number;
  amountSpan: number;
  currencyCodeSpan: number;
}

class TransactionRow extends React.Component<Props> {
  public handleTransactionClick = (event: MouseEvent<HTMLElement>) => {
    if (!this.props.handleClick) {
      return;
    }

    // Close Details if it's already open
    if (this.props.showDetails) {
      this.props.handleClick("");
      return;
    }

    // Find element with data-id attribute to get the transaction.id
    const target = event.target as HTMLElement;
    const transactionNode = target.closest("[data-id]") as HTMLElement;
    const id = transactionNode.dataset.id;
    if (!id) {
      return;
    }

    this.props.handleClick(id);
  };
  public render() {
    const { nameSpan, actionSpan, amountSpan, currencyCodeSpan } = this.props;
    return (
      <RowContainer active={this.props.showDetails}>
        <Transaction
          active={this.props.showDetails}
          onClick={this.handleTransactionClick}
          data-id={this.props.id}
          data-testid={this.props.id}
        >
          <ColumnText span={nameSpan}>{this.props.name}</ColumnText>
          <ColumnText className={mobileHidden} span={2}>
            {this.props.brand}
          </ColumnText>
          <ColumnText className={`${mobileHidden}`} span={3}>
            XXXX {this.props.lastFourDigits}
          </ColumnText>
          <ColumnText span={actionSpan} className={capitalize}>
            {this.props.action}
          </ColumnText>
          <ColumnText className={alignRight} span={amountSpan}>
            {this.props.amount.toFixed(2)}
          </ColumnText>
          <ColumnText span={currencyCodeSpan}>
            {this.props.currencyCode}
          </ColumnText>
        </Transaction>
        <DetailsContainer
          active={this.props.showDetails}
          data-hidden={!this.props.showDetails}
          data-testid={`${this.props.id}-details`}
        >
          <Details>
            <DetailsColumn>
              <DetailsProperty>
                <PropertyTitle>ID:</PropertyTitle>
                <span>{this.props.id}</span>
              </DetailsProperty>
              <DetailsProperty>
                <PropertyTitle>Tracking code:</PropertyTitle>
                <span>{this.props.trackingCode}</span>
              </DetailsProperty>
              <DetailsProperty className={showMobile}>
                <PropertyTitle>Brand:</PropertyTitle>
                <span>{this.props.brand}</span>
              </DetailsProperty>
              <DetailsProperty>
                <PropertyTitle>Brand ID:</PropertyTitle>
                <span>{this.props.brandId}</span>
              </DetailsProperty>
            </DetailsColumn>
            <DetailsColumn>
              <DetailsProperty>
                <PropertyTitle>First 6 digits:</PropertyTitle>
                <span>{this.props.firstSixDigits}</span>
              </DetailsProperty>
              <DetailsProperty className={showMobile}>
                <PropertyTitle>Last 4 digits:</PropertyTitle>
                <span>{this.props.lastFourDigits}</span>
              </DetailsProperty>
              <DetailsProperty>
                <PropertyTitle>Expiry month:</PropertyTitle>
                <span>{this.props.expiryMonth}</span>
              </DetailsProperty>
              <DetailsProperty>
                <PropertyTitle>Expiry year:</PropertyTitle>
                <span>{this.props.expiryYear}</span>
              </DetailsProperty>
            </DetailsColumn>
          </Details>
        </DetailsContainer>
        {/* Hidden button for accessibility */}
        <button
          className={hidden}
          onClick={this.handleTransactionClick}
          data-id={this.props.id}
        >
          Toggle details
        </button>
      </RowContainer>
    );
  }
}

export default TransactionRow;
