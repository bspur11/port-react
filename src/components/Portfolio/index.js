import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Code Blog',
			description:
				'This is the Module 14 Challenge. It is a blog for coders to post interesting articles and comment on those articles and to communicate new and old ideas to other coders. The app follows the MVC (Model-View-Controller) paradigm in its folder architecture, using Handlebars.js as the templating language,Mysql and Sequelize to connect to a MySQL database for Models, and the express-session npm package for authentication. The bcrypt package was used for hashin passwords.',
			image: '',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Express & MySQL2',
				'Heroku & JawsDB',
			  "Express-handlebars",
				'Dontev',
				'bcrypt',
				'Sequelize',
			],
			github: 'https://github.com/bspur11/code-blog.git',
			deployed: 'https://coding-journal99.herokuapp.com/',
		},
		{
			name: 'Dangles',
			description:
				'This is your personal automobile information tracking system. Track time dependent, vehicle specific information from a single application, available on any web-enabled device.',
			image: 'dangles.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Handlebars.js',
				'Express & Sequelize',
				'Heroku & AWS S3',
			],
			github: 'https://github.com/OwaisIslam/auto-tracker',
			deployed: 'https://team-3-auto-tracker.herokuapp.com/',
		},
		{
			name: 'Refrain',
			description:
				'A clean and accurate way to search for your favorite songs while also displaying the lyrics.',
			image: 'Refrain.png',
			technologies: ['HTML/CSS', 'JavaScript', 'Materialize'],
			github: 'https://github.com/CodingGroupProject1/REFRAIN.git',
			deployed: 'https://codinggroupproject1.github.io/REFRAIN/',
		},
		{
			name: 'Tracker',
			description:
				'This is an Employee Tracker program designed for management to use to keep track of company employees, their departments, the managers they report to and the saleries they are paid.',
			image: 'tracker.png',
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
			image: 'brad-port.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/bspur11/brad-port.git',
			deployed: 'https://bspur11.github.io/brad-port/',
		},
		{
			name: 'Team Pro Gen',
			description:
				' This is a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.',
			image: 'team-pro-gen.png',
			technologies: ['jest', 'inquirer', 'to run the app use: node index.js'],
			github: '',
			deployed: '',
		},
		{
			name: 'Moble Bank',
			description:
				'This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.',
			image: 'moble-bank.png',
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
