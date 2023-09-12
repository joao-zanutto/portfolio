import React from "react";

export function scaling_rds() {
	return {
		date: "10 Sep 2023",
		title: "How to scale an AWS RDS Instance with minimal downtime",
		description:
			"Scaling database instances in production while mantaining the application healthy is not easy, but with the right strategy it can be done without your customers noticing it.",
		keywords: [
			"scaling rds",
			"scaling database",
			"change rds size",
			"scaling aws rds",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<p>
						In this article I'll be covering the strategy I employed
						to perform the instance size (vertical) scaling up
						operation on a RDS DB instance that is running in
						production with two active read replicas. Due to the
						need to keep the downtime to a minimal, since this could
						disrupt our services, we investigated all the options on
						the table and ended up with a few possible strategies.
					</p>

					<h1>The options</h1>

					<ul>
						<li>
							Snap and Restore - this strategy consists in
							creating a snapshot and restoring it with the
							appropriate instance size. While this is a valid
							strategy (that I employed once to move a RDS
							instance to a different subnet on the same VPC) it
							comes with the cost of having to renconcile any
							changes that happened after the snapshot action and
							before the restore.
						</li>
						<li>
							Scale and Promote Read Replica - this strategy
							consists, as the name implies, in scaling up a read
							replica and then promoting it, turning it into a
							standalone DB instance. While this is also a valid
							strategy used for specific use cases, it wouldn't be
							ideal in our case because since read replicas have
							asynchronous replication, we could end up with data
							loss and after the promotion we also would need to
							recreate the two read replicas that were running on
							the original database
						</li>
						<li>
							Multi-AZ Database Cluster - this is actually a new
							feature recently made available by AWS. It provides
							the best functionalities of both Multi-AZ and Read
							Replicas, creating semi-synchronous replicated
							readable replicas with automatic failover and DNS
							management. Enabling this cluster would be an ideal
							solution because we wouldn't have to worry about the
							scaling operation (just modify the instance and the
							automated failover will take care of the rest), but
							this feature has a limitation of not working with
							the `aws_s3` extension for postgres, which is a
							requirement for us
						</li>
						<li>
							Toggle Multi-AZ Instance Feature - this strategy is
							the simplest one, it consists in enabling Multi-AZ
							on the instance, modifying the database instance
							size and once the scaling operation has been
							complete, disable Multi-AZ.
						</li>
					</ul>

					<h1>And the winner is...</h1>

					<p>
						Among these strategies, we wanted to go with the
						Multi-AZ Clusters, as it would make it possible to
						perform the scale operation the easiest and would also
						solvo two main pain points by providing readable
						replicas with automated failover. However, as I stated
						before, this strategy was not viable to our team since
						we had a hard requirement on the `aws_s3` extension.
					</p>

					<p>
						If you don't have this extension as a requirement and
						you also need read replicas, I would advise to use this
						strategy as the the pricing will remain the same but
						you'll have all the gains. Do keep in mind that there is
						no way to migrate a single instance or Multi-AZ instance
						to a cluster or vice-versa, so you probably would have
						to recreate from a snapshot (which is worth it, in my
						humble opnion).
					</p>

					<h1>Step by Step</h1>

					<ol>
						<li>
							Enable Multi-AZ in the instance you want to scale
							and wait the synchronization to complete
						</li>
						<li>
							Modify the instance size and wait RDS complete the
							operation
						</li>
						<li>
							Once the operation is complete, disable Multi-AZ
						</li>
						<li>Repeat all the steps for each read replica</li>
					</ol>

					<p>
						Creating a Bash script to automate the Multi-AZ toggling
						and instance modification actions is also an option. It
						enables you to do all the steps in parallel, for the
						primary instance and it's read replicas, making the
						whole process easier and faster.
					</p>
				</div>
			</React.Fragment>
		),
	};
}
