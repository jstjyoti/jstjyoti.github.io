import emoji from "react-easy-emoji";

export const greetings = {
	name: "Jyoti Mishra",
	title: "Hi all, I'm Jyoti",
	description:
		"A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Django / Flask and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.",
	// ToDo Add resumeLink
		// resumeLink: "", 
};

export const openSource = {
	githubUserName: "jstjyoti",
};

export const contact = {};

export const socialLinks = {
	instagram: "https://www.instagram.com/whereisjyoti",
	github: "https://github.com/jstjyoti",
	linkedin: "https://www.linkedin.com/in/jyotim29/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"DevOps Engineer WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop Infrastructure and Release Pipeline that results faster releases and delivery"
		),
		emoji(
			"⚡ Develop Front end React Applications that involves user and results better User Experience to the Product"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		),
		emoji(
			"⚡ Build and Package Docker Images and independent releasable artifacts"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "Angular",
			fontAwesomeClassname: "logos:angular",
		},

		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "DevOps and AWS",
		progressPercentage: "90",
	},
	{
		Stack: "Front End Development",
		progressPercentage: "80",
	},
	{
		Stack: "API and Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "West Bengal University of Technology",
		subHeader: "Bachelor of Technology in Computer Science",
		duration: "September 2017 - April 2019",
		desc: "Managed Technical Coding Club and cleared finals of National Level Hackathon",
		descBullets: [
			"Worked as Stream Co-ordinator of Coding Club and Techfest Coding Club that increased participation by 60% from non Computer Science streams",
			"Runner-up of ideation in Smart India Hackathon under problem statement of Government of Gujrat",
		],
	},
];

export const experience = [
	{
		role: "DevOps and Cloud Engineer",
		company: "Evertz Microsystsems",
		companylogo: "/img/icons/common/evertzLogo.png",
		date: "June 2020 – Present",
		desc: "Manage Build and Release tooling and Infrastrusture for broadcasting product",
		descBullets: [
			"Created Cloudformation templated for faster deployment and autoscaling of Release infrastructure",
			"Created a Webhook based bot that makes the Build process faster and Error Free",
			"Implemented Angular-NestJs based Release Tool to cut down manual error and intervene for faster Release Process",
			"Created Ci/CD pipeline that reduced the gap between release cycle by 30%"
		],
	},
	{
		role: "Software Engineer",
		company: "Fusioncharts",
		companylogo: "/img/icons/common/fcLogo.jpeg",
		date: "August 2019 – May 2020",
		desc: "Worked as JavaScript Developer in small team of developer and brought valuable customers onboard for new features and inclusion in the library",
		descBullets: [
			"Helped adding circular guage chart that brought customers like boat and fitbit to the library for small screen device visualisation",
			"Created Build tools like WebPack to create lightweight package of library that improved customer packaging experience",
			"Created CI/CD pipeline for faster developement and QA process"
		]
	},
];

export const projects = [
	{
		name: "ToDo Add Project",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/jstjyoti",
		link: "https://example.com",
	},
	{
		name: "ToDo Add Project",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/jstjyoti",
		link: "https://example.com",
	},
	{
		name: "ToDo Add Project",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/jstjyoti",
		link: "https://example.com",
	},
];
