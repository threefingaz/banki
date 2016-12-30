import React, { Component } from 'react';
import Sticky from 'react-sticky-state';
import './App.css';
import 'tachyons/css/tachyons.min.css';

import Year from './components/Year';


import color from './data/color';
import y16 from './data/y16';
import y15 from './data/y15';
import y14 from './data/y14';
import y13 from './data/y13';
import y12 from './data/y12';
import y11 from './data/y11';
import y10 from './data/y10';
import y09 from './data/y09';
import y08 from './data/y08';
import y07 from './data/y07';
import y06 from './data/y06';
import y05 from './data/y05';

class App extends Component {
  state = {
    highlight: null
  };

  setHighLight(serv) {
    let state = {...this.state};
    state.highlight = serv === state.highlight ? null : serv;
    this.setState(state);
  }

  render() {
    const styles = {
      legend: {
        listStyle: 'none',
        padding: '0',
        width: '600px',
        fontSize: '0.75rem'
      },
      serv_0: {
        color: color('serv_0', this.state.highlight)
      },
      serv_1: {
        color: color('serv_1', this.state.highlight)
      },
      serv_2: {
        color: color('serv_2', this.state.highlight)
      },
      serv_3: {
        color: color('serv_3', this.state.highlight)
      },
      serv_4: {
        color: color('serv_4', this.state.highlight)
      }
    }
    return (
      <div className="App">
        <header className="w-100 cf">
          <div className="dib silver w5 pr4 pv4 fl" style={{fontSize: '0.75rem'}}>
            По данным предоставленным в <a className="silver hover-blue" href="http://datalaboratory.ru/events/designer-3/">
              тестовом задании
            </a>
          </div>
          <h1 className="dib f1 lh-title fl w-70">
            Оценка банковских услуг для бизнеса 2005—2016
          </h1>
        </header>
        <Sticky debug={true}>
          <div className="cf">
            <div className="banks-select dib w5 pr3 pt1 fl tc">
            </div>
            <ul className="lh-title normal pb4 fl cf" style={styles.legend}>
              <li className="dib mw5 border-box pr3 pb1 fl"
                onClick={() => this.setHighLight('serv_0')}>
                <span style={styles.serv_0} className="pointer">
                  Депозиты
                </span>
              </li>
              <li className="dib mw5 border-box pr3 pb1 fl"
                onClick={() => this.setHighLight('serv_2')}>
                <span style={styles.serv_2} className="pointer">
                  Кредитование
                </span>
              </li>
              <li className="dib mw5 border-box pr3 pb1 fl"
                onClick={() => this.setHighLight('serv_4')}>
                <span style={styles.serv_4} className="pointer">
                  Лизинг
                </span>
              </li>
              <li className="dib mw5 border-box pr3 pb1 fl"
                onClick={() => this.setHighLight('serv_1')}>
                <span style={styles.serv_1} className="pointer">
                  Обслуживание юрлиц
                </span>
              </li>
              <li className="dib mw5 border-box pr3 pb1 fl"
                onClick={() => this.setHighLight('serv_3')}>
                <span style={styles.serv_3} className="pointer">
                  Дистанционное обслуживание
                </span>
              </li>
            </ul>
          </div>
        </Sticky>
        <Year data={y16} label={'2016'} usd={{max: '77,9', min: '62,1'}} highlight={this.state.highlight}/>
        <Year data={y15} label={'2015'} usd={{max: '77,9', min: '50,5'}} highlight={this.state.highlight}/>
        <Year data={y14} label={'2014'} usd={{max: '59,5', min: '33,9'}} highlight={this.state.highlight}/>
        <Year data={y13} label={'2013'} usd={{max: '33,0', min: '30,2'}} highlight={this.state.highlight}/>
        <Year data={y12} label={'2012'} usd={{max: '32,9', min: '29,4'}} highlight={this.state.highlight}/>
        <Year data={y11} label={'2011'} usd={{max: '31,5', min: '27,9'}} highlight={this.state.highlight}/>
        <Year data={y10} label={'2010'} usd={{max: '31,2', min: '29,2'}} highlight={this.state.highlight}/>
        <Year data={y09} label={'2009'} usd={{max: '35,8', min: '28,9'}} highlight={this.state.highlight}/>
        <Year data={y08} label={'2008'} usd={{max: '28,1', min: '23,3'}} highlight={this.state.highlight}/>
        <Year data={y07} label={'2007'} usd={{max: '26,5', min: '24,5'}} highlight={this.state.highlight}/>
        <Year data={y06} label={'2006'} usd={{max: '28,2', min: '26,3'}} highlight={this.state.highlight}/>
        <Year data={y05} label={'2005'} usd={{max: '28,8', min: '27,6'}} highlight={this.state.highlight}/>
        <footer className="f6 silver pv4 mt6">
          © <a href="http://alnikitin.com" className="silver hover-blue">Алексей Никитин</a> для Лаборатории данных, 2016
        </footer>
      </div>
    );
  }
}

export default App;
