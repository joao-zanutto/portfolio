const INFO = {
	main: {
		title: "Joao Zanutto - DevOps Engineer",
		name: "Joao Zanutto",
		email: "jpberno@gmail.com",
		logo: "logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/joao-zanutto",
		linkedin: "https://linkedin.com/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/users/4100089/pedro-zanutto",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Cloud Solutions Expert",
		description:
			"I'm Joao, I work as a Cloud Engineer and I help companies deliver secure and scalable software in a resilient and fast manner by provisioning cloud infrastructure, developing automation and deployment pipelines, and by configuring monitoring tools that let us know when something is not right. I have extensive experience in the AWS cloud and in DevOps best practices, focusing primarily on communication, collaboration, automation and observability pillars",
	},

	about: {
		title: "Hello, I’m Joao",
		description: [
			"I began my journey in tech really young. At 12 years old, I hosted servers for two MMORPGs that I enjoyed in my home computer. Both of them included a backend server and a MySQL database. I also built websites on Adobe Dreamweaver to publish my servers and since then I've been into tech and distributed systems",
			"At 18 I was accepted as a Computer Science Bachelor at the University of Sao Paulo, the greatest in Latin America. There I learned the major foundational topics in computing, and had the chance to experiment and build projects on most areas that are applied in the industry today. During college, I worked on data science, embedded systems, web development, and software testing projects.",
			"By the time I finished college, I had 2 years of experience as a QA Engineer and was in my first year as a DevOps Engineer, the position where I learned the most. As a DevOps Engineer, I have the opportunity to test new technologies and use all the foundational computing knowledge I learned over all these years to design and build secure and resilient systems.",
		],
	},

	articles: {
		title: "Articles",
		description:
			"I write about Cloud Computing and DevOps, and sometimes I share my opinion on other computing topics",
	},

	projects: [
		{
			title: "terraform-aws-ecs-cluster",
			description:
				"Terraform module used to deploy an AWS ECS Cluster using EC2 instances as capacity provider.",
			logo: [
					"./tf.png",
					"./aws.png"
				  ],
			linkText: "View Project",
			link: "https://github.com/joao-zanutto/terraform-aws-ecs-cluster",
		},

		{
			title: "terraform-k8s-monitoring-module",
			description:
				"Terraform module used to deploy Prometheus and Grafana stack in Kubernetes",
			logo: [
				"./tf.png",
				"./k8s.png",
				"./prometheus.png",
				"./grafana.png"
				],
			linkText: "View Project",
			link: "https://github.com/joao-zanutto/terraform-k8s-monitoring-module",
		},

				{
			title: "shared-workflows",
			description:
				"Repository that contains GitHub Actions workflows used in multiple Terraform modules repos",
			logo: [
				"./actions.png",
				"./bash.png"
				],
			linkText: "View Project",
			link: "https://github.com/joao-zanutto/shared-workflows",
		},


	],
};

export default INFO;
