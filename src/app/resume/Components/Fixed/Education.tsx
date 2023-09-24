import React from "react";
import { useDataContext } from "../../Context/DataContext";
import TimeBar, { Jobs } from "../TimeBar/TimeBar";

const Education = () => {
	const { Education } = useDataContext();
	const jobs = { jobs: Education };
	return (
		<>
			<TimeBar
				title={"Ausbildung"}
				jobs={jobs satisfies Jobs}
			/>
		</>
	);
};

export default Education;
