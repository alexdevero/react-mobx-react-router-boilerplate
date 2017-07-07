import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import LazyRoute from 'lazy-route';
import DevTools from 'mobx-react-devtools';

import Footer from './Footer';
import Header from './Header';

@inject('store', 'routing')
@observer
export default class App extends Component {
	constructor(props) {
		super(props);

		this.store = this.props.store;
	}

	authenticate(e) {
		if (e) e.preventDefault();

		this.store.appState.authenticate();
	}

	render() {
		const {
			authenticated,
			authenticating,
			timeToRefresh,
			refreshToken
		} = this.store.appState;

		return (
			<div className='wrapper'>
				<Header location={this.props.routing.location} />

				<Route
					exact
					path='/'
					render={props => (
						<LazyRoute {...props} component={import('./Home')} />
					)}
				/>

				<Route
					exact
					path='/member'
					render={props => (
						<LazyRoute {...props} component={import('./Member')} />
					)}
				/>

				<Route
					exact
					path='/login'
					render={props => (
						<LazyRoute {...props} component={import('./Login')} />
					)}
				/>

				<Footer />
			</div>
		);
	}
}
