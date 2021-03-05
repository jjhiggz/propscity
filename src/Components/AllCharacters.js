import React from "react";
export default function AllCharacters() {
	return (
		<div id="all-characters-section">
			<h2>Below are all the characters</h2>
			{/*  This is What a Card should look like */}
			<div class="card">
				<img
					src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
					alt="Rick Sanches"
				/>
				<h1>Rick Sanchez</h1>
			</div>
		</div>
	);
}
