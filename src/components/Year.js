import React, { Component } from 'react';
import Hair from './Hair';
import List from './List';

const service_map = [
  'Все услуги',
  'Автокредиты',
  'Вклады',
  'Дебетовые карты',
  'Депозиты для бизнеса',
  'Дистанционное обслуживание'
];

class Year extends Component {
  state = {
    list: 'none',
    rates: []
  };

  componentWillMount() {
    const yearRates = this.props.data.reduce((a,b) => {
      return [...a, b.service.rates.reduce((c,d) => {
        return [...c, d.rate];
      }, [])];
    }, []);
    this.setState({rates: yearRates});
  }

  toggleList() {
    const state = {...this.state};
    state.list = state.list === 'none' ? 'block' : 'none';
    this.setState(state);
  }

  render() {
    const styles = {
      year_bar: {
        backgroundColor: this.state.list === 'none' ? 'transparent' : '#F8F5EC',
      },
      whiskers: {
        backgroundColor: '',
        position: 'relative',
        width: '500px',
        cursor: 'pointer'
      },
      ruler: {
        position: 'relative',
      },
      rate: {
        position: 'absolute',
        color: this.state.list === 'none' ? '#DDDDDD' : '#C2C0BC',
        bottom: '0',
        textAlign: 'right',
        width: '100px',
        height: '100%',
        boxSizing: 'border-box',
        paddingTop: '4px',
        paddingRight: '4px',
        borderRight: '1px solid #F3F3F3',
        borderColor: this.state.list === 'none' ? '#F3F3F3' : '#F1EDE4',
      },
      usd: {
        // width: '120px',
        // color: '#DDDDDD',
        fontSize: '.9rem',
        // float: 'right',
        // margin: '2rem 3rem 0 0',
        fontFamily: 'monospace'
      }
    };

    const serv_0 = this.state.rates[0].map((rate, i) => <Hair val={rate} highlight={this.props.highlight} serv='serv_0' key={i}/>);
    const serv_1 = this.state.rates[1].map((rate, i) => <Hair val={rate} highlight={this.props.highlight} serv='serv_1' key={i}/>);
    const serv_2 = this.state.rates[2].map((rate, i) => <Hair val={rate} highlight={this.props.highlight} serv='serv_2' key={i}/>);
    const serv_3 = this.state.rates[3].map((rate, i) => <Hair val={rate} highlight={this.props.highlight} serv='serv_3' key={i}/>);
    const serv_4 = this.state.rates[4].map((rate, i) => <Hair val={rate} highlight={this.props.highlight} serv='serv_4' key={i}/>);

    const digits = (digit) => this.props.label === '2016' ? digit : null;
    const arrow = this.state.list === 'none' ? '▸' : '▾';

    return (
      <div className="year cf" style={styles.year_bar}>
        <div className="cf">
          <div className="dib w5 pr3 pt3 fl f6 normal tr lh-title" >
          </div>
          <div className="ruler dib fl mr5" style={styles.ruler}>
            <h3 className="year-label dib pt3 fl f6 normal lh-title blue pointer absolute">
              <span className="f6 dib w1 lh-solid">{arrow}</span> {this.props.label}
            </h3>
            <div className="rate f6" style={{...styles.rate, left: '0px'  }}>{digits(1)}</div>
            <div className="rate f6" style={{...styles.rate, left: '100px'}}>{digits(2)}</div>
            <div className="rate f6" style={{...styles.rate, left: '200px'}}>{digits(3)}</div>
            <div className="rate f6" style={{...styles.rate, left: '300px'}}>{digits(4)}</div>
            <div className="rate f6" style={{...styles.rate, left: '400px'}}>{digits(5)}</div>
            <ul className="whiskers dib pt4 pointer" style={styles.whiskers} onClick={() => this.toggleList()}>
              {serv_0}
              {serv_1}
              {serv_2}
              {serv_3}
              {serv_4}
            </ul>
          </div>
          <div className="usd dib w4 fl pt4 silver" style={styles.usd}>
            USD ⤒{this.props.usd.max}・⤓{this.props.usd.min}
          </div>
        </div>
        <List data={this.props.data} display={this.state.list} highlight={this.props.highlight}/>
      </div>
    );
  }
}

export default Year;
