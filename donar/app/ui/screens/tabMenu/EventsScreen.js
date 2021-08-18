import React, {Component} from 'react';
import EventsScreenUI from './EventsScreenUI';

export default class EventsScreen extends Component {
  render() {
    return <EventsScreenUI navigation={this.props.navigation}/>;
  }
}
