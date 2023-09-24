import React from "react";
import { useDataContext } from "../../Context/DataContext";
import TimeBar, { Jobs } from "../TimeBar/TimeBar";

const Certifications = () => {
	const { Certifications } = useDataContext();
	const jobs = { jobs: Certifications };
	return (
		<>
			<TimeBar
				title={"Zertifikat"}
				jobs={jobs satisfies Jobs}
			/>
		</>
	);
};

export default Certifications;
