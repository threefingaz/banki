import React from 'react';
import Bar from './Bar';

const List = (props) => {
  let display = props.display;
  let banks = [];

  const styles = {
    rate: {
      position: 'absolute',
      color: '#F3F3F3',
      bottom: '0',
      textAlign: 'right',
      width: '100px',
      height: '100%',
      boxSizing: 'border-box',
      paddingRight: '4px',
      borderRight: '1px solid #F3F3F3',
      borderColor: display === 'none' ? '#F3F3F3' : '#F1EDE4',
    }
  };

  for (var i=0; i < props.data.length; i++) {
    for (var j=0; j<props.data[i].service.rates.length; j++) {
      let bank = {
        bank: props.data[i].service.rates[j].bank,
        serv: 'serv_' + i,
        rate: props.data[i].service.rates[j].rate
      }
      banks.push(bank);
    }
  }

  const banks_rows = banks.reduce((allBanks, bank) => {
    for (var i=0; i < allBanks.length; i++) {
        if (allBanks[i].bank === bank.bank) {
            let banks = [...allBanks];
            allBanks[i].services.push({
              service: bank.serv,
              rate: bank.rate
            })
            return [...allBanks];
        }
    }
    return [...allBanks, {
      bank: bank.bank,
      services: [
        {
          service: bank.serv,
          rate: bank.rate
        }
      ]
    }];
  }, []);

  const list = banks_rows.map((row, i) => {
    const bars = row.services.map((rateBar, j) => <Bar highlight={props.highlight} val={rateBar.rate} serv={rateBar.service} num={j} key={j}/>);
    return (
      <div key={i} className="bank-row f6 relative cf">
          <h4 className="bank-label dib w5 pr3 pt1 fl normal gray tr">
            {row.bank}
          </h4>
          <div className="ruler dib relative" style={styles.ruler}>
            <div className="rate" style={{...styles.rate, left: '0px'  }}></div>
            <div className="rate" style={{...styles.rate, left: '100px'}}></div>
            <div className="rate" style={{...styles.rate, left: '200px'}}></div>
            <div className="rate" style={{...styles.rate, left: '300px'}}></div>
            <div className="rate" style={{...styles.rate, left: '400px'}}></div>
            <ul className="bars dib pt4 relative" style={{width: '500px'}}>
              {bars}
            </ul>
          </div>
      </div>
    );
  });

  return (
    <div className="banks-list" style={{display: display}}>{list}</div>
  )
};

export default List;
