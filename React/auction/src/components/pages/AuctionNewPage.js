import React, {Component} from 'react';
import {AuctionForm} from '../AuctionForm';
import {Auction} from '../../requests/auctions';
import moment from "moment";

class AuctionNewPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
        startDate: moment(),
      newAuction: {
        title: "",
        details: ""
      },
      validationErrors: []
    };

    this.createAuction = this.createAuction.bind(this);
    this.updateNewAuction = this.updateNewAuction.bind(this);
    this.updateNewAuctionDate = this.updateNewAuctionDate.bind(this);
  }

  updateNewAuction (data) {
    const {newAuction} = this.state;

    this.setState({
      newAuction: {...newAuction, ...data}
    });
  }

  updateNewAuctionDate (data) {
    this.setState({
      startDate: data
    });
  }

  createAuction () {
    const {history} = this.props;
    const {newAuction} = this.state;
    Auction
      .create(newAuction)
      .then(data => {
        if (data.errors) {
          this.setState({
            validationErrors: data
              .errors
              .filter(e => e.type === 'ActiveRecord::RecordInvalid')
          });
        } else {
          history.push(`/auctions/${data.id}`)
        }
      });
  }

  render () {
    const {newAuction, validationErrors,startDate} = this.state;

    return (
      <main
        className="AuctionNewPage"
        style={{padding: '0  20px'}}
      >
        <h2>Auctions</h2>
        <AuctionForm
          errors={validationErrors}
          startDate={startDate}
          auction={newAuction}
          onChange={this.updateNewAuction}
          onChangeDate={this.updateNewAuctionDate}
          onSubmit={this.createAuction}
        />

      </main>
    );
  }
}

export {AuctionNewPage};
