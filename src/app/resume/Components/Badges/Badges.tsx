import React from "react";
import Section from "./Section";

const Badges = () => {
	return (
		<>
			<Section
				title={"Frontend"}
				start={0}
				end={11}
			/>
			<Section
				title={"Backend"}
				start={11}
				end={20}
			/>
			<Section
				title={"Others"}
				start={20}
				end={41}
			/>
		</>
	);
};

export default Badges;
