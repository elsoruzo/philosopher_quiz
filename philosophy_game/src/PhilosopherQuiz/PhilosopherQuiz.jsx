import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PhilosopherQuiz.css';

const Hero = () =>
<div className="row">
	<div className="jumbotron col-10 offset-1">
		<h1>Philosopher Quiz</h1>
		<p>select the book written by the philosopher shown</p>
	</div>
</div>

const Turn = ({ author, books, answerStatus = 'none', onAnswerSelected }) => {
	const backgroundColor = getBackgroundColor(answerStatus);

return (
	<div className="row turn" style={{ backgroundColor }}>
		<div className="col-4 offset-1">
			<img src={author.imageUrl} alt="Author" className="authorImage"/>
		</div>
		<div className="col-6">
			{books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected} />)}
		</div>
	</div>
);
}

Turn.propTypes = {
	author: PropTypes.shape({
		name: PropTypes.string.isRequired,
		imageUrl: PropTypes.string.isRequired,
		imageSource: PropTypes.string.isRequired,
		books: PropTypes.arrayOf(PropTypes.string).isRequired
	}),
	books: PropTypes.arrayOf(PropTypes.string).isRequired,
	onAnswerSelected: PropTypes.func.isRequired,
	answerStatus: PropTypes.string.isRequired
}

function getBackgroundColor(answerStatus) {
	return {
		none: 'white',
		correct: 'green',
		incorrect: 'red'
	}[answerStatus];
}

const Book = ({title, onClick}) =>
<div className="answer" onClick={onClick.bind(null, title)}>
	<h4>{title}</h4>
</div>


const Continue = () => null;

const Footer = () =>
<div id="footer" className="row">
	<div className="col-12">
		<p className="text-muted credit">
			<span>All images are from</span>
			<a href="https://commons.wikimedia.org/wiki/Main_Page" target="_blank"> Wikimedia Commons </a>
			<span>and are in public domain</span>
		</p>
	</div>
</div>

const PhilosopherQuiz = ({ turnData, answerStatus, onAnswerSelected }) =>
<div className="container-fluid">
	<Hero/>
	<Turn {...turnData} answerStatus={answerStatus} onAnswerSelected={onAnswerSelected}/>
	<Continue/>
	<Footer/>
</div>

export default PhilosopherQuiz;
