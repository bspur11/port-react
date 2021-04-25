import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/recent-photo.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					I am a student full stack web developer looking 
					to build a career as a Web developer. I am working on
					a certificate in full stack development from the
					University of Toronto bootcamp, with newly developed
					skills in JavaScript, CSS, React.js, and responsive web
					design. I am working on developing my skills as an 
					innovative problem solver who is passionate about 
					developing apps, with a focus on mobile-first design 
					and development. With each project, I strive to increase
					my knowlege of web design and persue inovative problem solving
					to best engage my audience for an impactful
					user experience.
				</p>
				
			</div>
		</section>
	);
}

export default About;
