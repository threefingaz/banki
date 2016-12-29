const color = (serv, highlight) => {
  switch (serv) {
    case 'serv_0':
      return highlight === 'serv_0' || highlight === null ? '#7875BE' : '#ddd'
      break;
    case 'serv_1':
      return highlight === 'serv_1' || highlight === null ? '#E975B2' : '#ddd'
      break;
    case 'serv_2':
      return highlight === 'serv_2' || highlight === null ? '#E8394E' : '#ddd'
      break;
    case 'serv_3':
      return highlight === 'serv_3' || highlight === null ? '#F6812A' : '#ddd'
      break;
    case 'serv_4':
      return highlight === 'serv_4' || highlight === null ? '#F6B536' : '#ddd'
      break;
    case 'serv_5':
      return highlight === 'serv_5' || highlight === null ? '#2CAF88' : '#ddd'
      break;
    default:
      return '#000'
  }
};

export default color;
