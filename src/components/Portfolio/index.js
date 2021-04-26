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
			name: 'Budget Tracker',
			description:
				'Budget Tracker is an Application that uses a noSQL database and offline persistance for a great user experience for managing their finances and budgeting no matter where they are.',
			image: 'budget-tracker-image.png',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexedDB & Service Workers',
				'Node.js',
				'Express',
			],
			github: 'https://github.com/OwaisIslam/budget-tracker',
			deployed: 'https://budget-tracker-owais.herokuapp.com/',
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
			name: 'Password Generator',
			description:
				'This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.',
			image: 'password-generator-image.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/OwaisIslam/password-generator',
			deployed: 'https://owaisislam.github.io/password-generator/',
		},
		{
			name: 'Note Taker',
			description:
				'This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.',
			image: 'note-taker-image.png',
			technologies: ['HTML/CSS', 'JavaScript', 'Express.js'],
			github: 'https://github.com/OwaisIslam/note-taker',
			deployed: 'https://note-taker-owais.herokuapp.com/',
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
