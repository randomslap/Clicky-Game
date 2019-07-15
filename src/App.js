import React, { Component } from "react";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import cards from "./images.json";

class App extends Component {
	state = {
		score: 0,
		highscore: 0,
		status: "Select a card",
		cards: cards,
		clicked: []
	};

	gameOver = () => {
		this.setHighscore();
		this.setState({
			score: 0,
			status: "Game Over",
			clicked: []
		});
		console.log(this.state.clicked);
	};

	setHighscore = () => {
		if (this.state.score > this.state.highscore) {
			this.setState({
				highscore: this.state.score
			});
		}
	};

	shuffleArr = arr => {
		let i = arr.length - 1;
		for (; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
		return this.setState({
			cards: arr
		});
	};

	guessCheck = value => {
		console.log(value);
		this.setState({
			status: "You guessed correctly",
			clicked: this.state.clicked.concat(value),
			score: this.state.score + 1
		});
		this.state.clicked.map(click => {
			if (click === value) {
				return this.gameOver();
			}
			return true;
		});
	};

	handleClicked = event => {
		event.preventDefault();
		let value = event.currentTarget.value;
		this.guessCheck(value);
		this.shuffleArr(this.state.cards);
	};

	render = () => {
		return (
			<div>
				<Nav
					currentscore={this.state.score}
					highscore={this.state.highscore}
					status={this.state.status}
				/>
				<ul>
					{this.state.cards.map(card => {
						return (
							<button
								name="card"
								value={card.id}
								onClick={this.handleClicked}
							>
								<Cards
									name={card.name}
									id={card.id}
									url={card.url}
								/>
							</button>
						);
					})}
				</ul>
			</div>
		);
	};
}

export default App;
