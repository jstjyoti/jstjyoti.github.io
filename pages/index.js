import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Jyoti Mishra",
					description:
						"A passionate DevOps Engineer and Full Stack Web Developer.",
					image: "https://avatars3.githubusercontent.com/jstjyoti",
					url: "https://jstjyoti.github.io",
					keywords: [
						"Jyoti",
						"Jyoti Mishra",
						"@jstjyoti",
						"jyotim29",
						"Portfolio",
						"Jyoti Portfolio ",
						"Jyoti Mishra Portfolio",
						"web developer",
						"full stack",
						"full stack web developer",
						"DevOps Engineer",
						"AWS Engineer",
						"typescript",
						"javascript",
						"rest framework",
						"nodejs ",
						"expressjs",
						"reactjs ",
						"aws",
						"redux",
						"docker",
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			<Proficiency />
			<Education />
			<Experience />
			<Projects />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
