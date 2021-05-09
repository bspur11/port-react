import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/bspur11"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={"/port-react/assets/logos/github-logo.png"}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={"/port-react/assets/logos/linkedin-logo.png"}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://twitter.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={"/port-react/assets/logos/twitter-logo.png"}
						alt="Twitter"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
