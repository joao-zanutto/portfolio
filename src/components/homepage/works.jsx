import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work spacer">
							<img
								src="./orbee.png"
								alt="orbee"
								className="work-image"
							/>
							<div className="work-title">Orbee</div>
							<div className="work-subtitle">
								DevOps Engineer
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>

						<div className="work spacer">
							<img
								src="./qr.png"
								alt="qr-capital"
								className="work-image"
							/>
							<div className="work-title">QR Capital</div>
							<div className="work-subtitle">
								DevOps Engineer
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>

						<div className="work">
							<img
								src="./altbank.png"
								alt="alt.bank"
								className="work-image"
							/>
							<div className="work-title">alt.bank</div>
							<div className="work-subtitle">
								DevOps Engineer
							</div>
							<div className="work-duration">2021 - 2022</div>


						</div>
						
						<div className="work spacer">
							<div className="work-subtitle">
								QA Engineer
							</div>
							<div className="work-duration">2019 - 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
