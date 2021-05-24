import React from 'react';
import Project from '../Project';
// import Images from 'src/assets/images';

function Portfolio() {
	const projects = [
		{
			name: 'book End',
			description:
			'Are you struggling to find a good book to read and have exausted your options to find the best one for you?  Bookend is a website that will recommend books based on your TV prefences. BookEnd will find the perfect book for you! ',
			image: '/port-react/assets/images/bookend.png',
			technologies: [
				'React - HTML and CSS',
				'MongoDB/Mongoose',
				'Node.js',
				'Google books/Movie API',
				'Heroku',
			  "PWA",
				'Graphql',
				'Noder.js',
				'Express.js',
			],
			github: 'https://github.com/project3UOT/bookend.git',
			deployed: 'http://bookend-recommendations.herokuapp.com/',
		},
		{
			name: 'Dangles',
			description:
				'Welcome to Dangles. Take a brave step into the world of Fantasy NHL Hockey by making your ideal team and seeing how they stack up against other fans!',
			image: '/port-react/assets/images/dangles.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Handlebars.js',
				'Express & Sequelize',
				'Heroku & AWS S3',
			],
			github: 'https://github.com/uoft-project2-group7/project.git',
			deployed: 'https://intense-headland-44008.herokuapp.com/',
		},
		{
			name: 'Refrain',
			description:
				'A clean and accurate way to search for your favorite songs while also displaying the lyrics.',
			image: '/port-react/assets/images/Refrain.png',
			technologies: ['HTML/CSS', 'JavaScript', 'Materialize'],
			github: 'https://github.com/CodingGroupProject1/REFRAIN.git',
			deployed: 'https://codinggroupproject1.github.io/REFRAIN/',
		},
		{
			name: 'Tracker',
			description:
				'This is an Employee Tracker program designed for management to use to keep track of company employees, their departments, the managers they report to and the saleries they are paid.',
			image: '/port-react/assets/images/tracker.png',
			technologies: [
				'inquirer',
				'console.table',
				'mysql2',
			],
			github: 'https://github.com/bspur11/personel-tracker.git',
			deployed: 'https://drive.google.com/file/d/1hmiNY-8eQ5mnz-Po5S2-Oq9UWdpenM2e/view',
		},
		{
			name: 'brad-port',
			description:
				'This is my first atempt at a portfolio website. It needs much improvement and I will work on that in the future..',
			image: '/port-react/assets/images/brad-port.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/bspur11/brad-port.git',
			deployed: 'https://bspur11.github.io/brad-port/',
		},
		{
			name: 'Team Pro Gen',
			description:
				' This is a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.',
			image: '/port-react/assets/images/team-pro-gen.png',
			technologies: ['jest', 'inquirer', 'to run the app use: node index.js'],
			github: 'https://github.com/bspur11/team-pro-gen.git',
			deployed: '',
		},
		{
			name: 'Moble Bank',
			description:
				'This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.',
			image: '/port-react/assets/images/moble-bank.png',
			technologies: ['HTML/CSS', 'JavaScript', 'Express.js'],
			github: 'https://github.com/bspur11/moble-bank.git',
			deployed: 'https://bud-bank.herokuapp.com/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
