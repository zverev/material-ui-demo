import { Checkbox, Button, Sidebar, AppBar, Tabs, Tab } from 'react-toolbox'
import DatePicker from 'react-toolbox/lib/date_picker'
import React, { Component } from 'react'
import { CloseIcon, CalculateIcon, DownloadIcon, LayersIcon, PrintIcon, VolumeIcon } from './icons.js'
import moment from 'moment'
import CheckboxesDemo from './CheckboxesDemo'

const datepickerLocaleRu = {
  months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
  monthsShort: 'янв._фев._мар._апр._май._июн._июл._авг._сен._окт._ноя._дек.'.split('_'),
  weekdays: 'понедельник_вторник_среда_четверг_пятница_субботв_воскресенье'.split('_'),
  weekdaysShort: 'пн._вт._ср._чт._пт._сб._вс'.split('_'),
  weekdaysLetter: 'пн_вт_ср_чт_пт_сб_вс'.split('_')
}

class SidebarContents extends Component {
  componentWillMount() {
    moment.locale('ru')
    this.setState({
      date: new Date(),
      tabIndex: 0
    })
  }

  onTabChange(tabIndex) {
    this.setState({ tabIndex })
  }

  render() {
    return (
      <div>
        <DatePicker
          locale={datepickerLocaleRu}
          onChange={(date) => this.setState({ date })}
          value={this.state.date}
          inputFormat={(value) => moment().format('MMMM YYYY')}
        />
        <Tabs index={this.state.tabIndex} fixed onChange={(tabIndex) => this.onTabChange(tabIndex)}>
          <Tab label={<PrintIcon/>}><small>Primary content</small></Tab>
          <Tab label={<CloseIcon/>}>{<CheckboxesDemo />}</Tab>
          <Tab label={<CalculateIcon/>}><small>Disabled content</small></Tab>
          <Tab label={<DownloadIcon/>}><small>Fourth content hidden</small></Tab>
          <Tab label={<LayersIcon/>}><small>Fifth content</small></Tab>
          <Tab label={<VolumeIcon/>}><small>Fifth content</small></Tab>
        </Tabs>
      </div>
    )
  }
}


export default class extends Component {
  render() {
    const { onCloseButtonClick, sidebarPinned } = this.props

    return (
      <Sidebar pinned={sidebarPinned} width={5}>
          <AppBar flat>
            <Button onClick={onCloseButtonClick}>
              <CloseIcon />
            </Button>
          </AppBar>
          <div style={{ flex: 1 }}>
            <SidebarContents />
          </div>
      </Sidebar>
    )
  }
}
