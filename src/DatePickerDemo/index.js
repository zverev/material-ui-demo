import React, { createClass } from 'react'
import { DatePicker } from 'react-toolbox'
import moment from 'moment'

const localeRu = {
  months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
  monthsShort: 'янв._фев._мар._апр._май._июн._июл._авг._сен._окт._ноя._дек.'.split('_'),
  weekdays: 'понедельник_вторник_среда_четверг_пятница_субботв_воскресенье'.split('_'),
  weekdaysShort: 'пн._вт._ср._чт._пт._сб._вс'.split('_'),
  weekdaysLetter: 'пн_вт_ср_чт_пт_сб_вс'.split('_')
}

export default createClass({
  componentWillMount() {
    moment.locale('ru')
    this.setState({
      date: new Date()
    })
  },

  render() {
    return (
      <DatePicker
        locale={localeRu}
        onChange={(date) => this.setState({ date })}
        value={this.state.date}
        inputFormat={(value) => moment(value).format('MMMM YYYY')}
      />
    )
  }
})
