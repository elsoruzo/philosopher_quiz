import React from 'react';
import ReactDOM from 'react-dom';
import { chain, sample } from 'lodash';
import './index.css';
import PhilosopherQuiz from './PhilosopherQuiz/PhilosopherQuiz';
import registerServiceWorker from './registerServiceWorker';

const authors = [
	{
		name: 'Albert Kamus',
		imageUrl: 'images/authors/albertkamus.jpg',
		imageSource: 'Wikimedia Commons',
		books: [ 'The Myth of Sisyphus', 'The Rebel', 'The Plague' ]
	},
	{
		name: 'Jean-Paul Sartre',
		imageUrl: 'images/authors/jeanpaulsartre.jpg',
		imageSource: 'Wikimedia Commons',
		books: ['The Wall', 'No Exit', 'Existentialism Is a Humanism']
  },
  {
		name: 'Friedrich Nietzsche',
		imageUrl: 'images/authors/friedrichnietzsche.jpg',
		imageSource: 'Wikimedia Commons',
		books: ['Human, All Too Human', 'Ecce Homo', 'Thus Spoke Zaratustra']
  },
  {
	name: 'Aristotle',
	imageUrl: 'images/authors/aristotle.jpg',
	imageSource: 'Wikimedia Commons',
	books: ['Corpus Aristotelicum']
   },  
];

function getTurnBooks(authors) {
	return chain(authors)
		.reduce((books, author) => books.concat(author.books), [])
		.shuffle()
		.slice(0, 4)
		.value();
}

function getTurnData(authors) {
	const books = getTurnBooks(authors);
	const answer = sample(books);
	const author = authors.find((a) => a.books.includes(answer));

	return { books, author };
}

const state = {
	turnData: getTurnData(authors)
};

const element = <PhilosopherQuiz {...state}/>
const root = document.getElementById('root');

ReactDOM.render(element, root);
registerServiceWorker();
