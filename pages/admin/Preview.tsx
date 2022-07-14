import React from "react";
import FullImage from "../../components/fullImage";

const Preview = () => {
	return (
		<main className="flex-1">
			<div className="py-6">
				<div className="px-4 sm:px-6 md:px-0">
					<h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
				</div>
				<div className="px-4 sm:px-6 md:px-0">
					{/* Replace with your content */}
					<FullImage />
					{/* /End replace */}
				</div>
			</div>
		</main>
	);
};

export default Preview;
