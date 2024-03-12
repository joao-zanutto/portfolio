import React from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Education = () => {
	return (
		<div className="works">
			<Card
				icon={faGraduationCap}
				title="Education"
				body={
					<div className="works-body">
						<div className="work spacer">
							<img
								src="./usp-logo.jpg"
								alt="orbee"
								className="work-image"
							/>
							<div className="work-title">Universidade de São Paulo</div>
							<div className="work-subtitle">
								Bachelor in Computer Science
							</div>
							<div className="work-duration">2015 - 2021</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Education;
