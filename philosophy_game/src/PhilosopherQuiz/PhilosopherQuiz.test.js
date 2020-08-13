import React from 'react';
import ReactDOM from 'react-dom';
import PhilosopherQuiz from './PhilosopherQuiz';

describe("Philosopher Quiz", () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<PhilosopherQuiz/>, div);
	})
});
