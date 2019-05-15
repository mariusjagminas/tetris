import React from 'react';
import './controlPanel.css';
import ArrowUp from './arrowUp/arrowUp';
import ArrowDown from './arrowDown/arrowDown';
import ArrowLeft from './arrowLeft/arrowLeft';
import ArrowRight from './arrowRight/arrowRight';

class ControlPanel extends React.PureComponent {
	constructor(props) {
		super();
		this.handleClick = props.handleClick;
	}

	handleClickButton = e => {
		const controlPanel = document.querySelector('.control-panel__arrows-wrapper');
		const activeClass = e.target.dataset.arrow;
		controlPanel.classList.add(activeClass);
		setTimeout(() => {
			controlPanel.classList.remove(activeClass);
		}, 300);
		this.handleClick(e);
	};

	render() {
		console.log('render ControlPanel');
		return (
			<div className="control-panel">
				<div className="control-panel__arrows-wrapper">
					<ArrowUp handleClickButton={this.handleClickButton} />
					<ArrowDown handleClickButton={this.handleClickButton} />
					<ArrowLeft handleClickButton={this.handleClickButton} />
					<ArrowRight handleClickButton={this.handleClickButton} />
				</div>
			</div>
		);
	}
}

export default ControlPanel;
