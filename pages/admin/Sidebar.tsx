import React from "react";
import AddComponents from "./AddComponents";

const Sidebar = () => {
	return (
		<div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
			{/* Sidebar component, swap this element with another sidebar if you like */}
			<div className="border-r border-gray-200 pt-5 flex flex-col flex-grow bg-white overflow-y-auto">
				<div className="flex-shrink-0 px-4 flex items-center">
					<img
						className="h-8 w-auto"
						src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
						alt="Workflow"
					/>
				</div>
				<div className="flex-grow mt-5 flex flex-col">
					<div className="flex-1 px-2 pb-4 space-y-1">
						<h2>Komponent overview</h2>
						<AddComponents />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
