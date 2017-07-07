import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}

	render() {
		const store = this.store;
		return (
			<div className='page home'>
				<div className='page__top'>
					<div className='boilerplate-logo' />

					<h1>React MobX React-Router Boilerplate</h1>

          <p>A simple starting point for your React project with routing, data-fetching and state management!</p>

					<div>
						<a
              className='btn btn--hasIcon'
							href='https://github.com/alexdevero/react-mobx-react-router-boilerplate'
							target='_blank'
						>
							Download from GitHub
						</a>
					</div>
				</div>

				<main>
					<div className='main__header'>
						<h3>Included libraries</h3>

						<hr />
					</div>

					<div className='main__content'>
            <div className='main__item'>
					    <div className='main__item-logo mobx' />

					    <div className='main__item-content'>
					      <a
					        href='http://mobxjs.github.io/mobx/'
					        target='_blank'
					      >
					        <h4>MobX</h4>
					      </a>

					      <small>Reactive State Management</small>

					      <p>MobX provides simple and scalable state management.</p>
					    </div>
					  </div>

					  <div className='main__item'>
					    <div className='main__item-logo react' />

					    <div className='main__item-content'>
					      <a
					        href='https://facebook.github.io/react/'
					        target='_blank'
					      >
					        <h4>React</h4>
					      </a>

					      <small>UI Library</small>

					      <p>React is a JavaScript library for building user interfaces.</p>
					    </div>
					  </div>

					  <div className='main__item'>
					    <div className='main__item-logo reactrouter' />

					    <div className='main__item-content'>
					      <a
					        href='https://react-router.now.sh/'
					        target='_blank'
					      >
					        <h4>React Router (v4)</h4>
					      </a>

					      <small>Routing Library</small>

					      <p>React Router helps you create routes for React in a declarative way.</p>
					    </div>
					  </div>

					  <div className='main__item'>
					    <div className='main__item-logo webpack' />

					    <div className='main__item-content'>
					      <a href='http://webpack.github.io/' target='_blank'>
					        <h4>Webpack (v3)</h4>
					      </a>

					      <small>Module Bundler</small>

					      <p>A bundler for javascript. Packs many modules into a few bundled assets.</p>
					    </div>
					  </div>
					</div>

					<div className='main__extras'>
						<h4>Noteworthy</h4>

						<hr />

						<ul>
							<li>✓ Async Component Loading</li>
							<li>✓ Code-splitting</li>
							<li>✓ Extracted & autoprefixed CSS</li>
							<li>✓ Modular SASS</li>
							<li>✓ Maintained & up-to-date dependencies</li>
						</ul>
					</div>
				</main>
			</div>
		);
	}
}
