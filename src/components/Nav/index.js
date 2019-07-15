import React from "react";

function Nav(props) {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item">
					<strong>Score: </strong> {props.currentscore}
				</li>
				<li class="nav-item">
					<strong>High Score: </strong> {props.highscore}
				</li>
				<li class="nav-item">
					<strong>Status: </strong> {props.status}
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
