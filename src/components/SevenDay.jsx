import React from 'react';

class SevenDay extends React.Component {
  constructor(props) {
    super(props);
    this.getSevenDayData = this.getSevenDayData.bind(this);
  }

  getSevenDayData(data) {
    const sevenDayData = [];
    for (let i = 0; i < data.length; i += 7) {
      let sevenDayTotal = 0;
      let dayCount = 0;
      let initialDay = data[i][0]
      for (let k = i; k < i + 7; k++) {
        if (k < data.length) {
          sevenDayTotal += data[k][1];
          dayCount ++;
        }
      }
      sevenDayData.push({
        initialDay: initialDay,
        dayCount: dayCount,
        sevenDayTotal: sevenDayTotal,
        casesPerDay: Number(sevenDayTotal / dayCount).toFixed(2),
      })
    }
    return sevenDayData;
  }

  render() {
    const {data} = this.props;
    const sevenDayData = this.getSevenDayData(data);
    console.log(sevenDayData);
    return (
      <>
        <div>
          Seven Day View
        </div>

      </>
    )
  }
}

export default SevenDay