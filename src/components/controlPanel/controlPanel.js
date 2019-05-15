import React from 'react';
import './controlPanel.css';
import ArrowUp from './arrowUp/arrowUp';
import ArrowDown from './arrowDown/arrowDown';
import ArrowLeft from './arrowLeft/arrowLeft';
import ArrowRight from './arrowRight/arrowRight';
import PauseBtn from './pauseBtn/pauseBtn';

class ControlPanel extends React.PureComponent {
	constructor(props) {
		super();
		this.handleClick = props.handleClick;
		this.pauseGame = props.pauseGame;
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
		return (
			<div className="control-panel">
				<div className="control-panel__arrows-wrapper">
					<ArrowUp handleClickButton={this.handleClickButton} />
					<ArrowDown handleClickButton={this.handleClickButton} />
					<ArrowLeft handleClickButton={this.handleClickButton} />
					<ArrowRight handleClickButton={this.handleClickButton} />
				</div>
					<PauseBtn pauseGame={this.pauseGame}/>
			</div>
		);
	}
}

export default ControlPanel;
