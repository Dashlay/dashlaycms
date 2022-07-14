import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { Suspense } from "react";
import { getUsedComponents } from "../redux/componentsSlice";

const FrontPage = () => {
	const components = useSelector(getUsedComponents);

	console.log("Components", components);

	// const getRegisteredComponent = async () => {
	// 	const Component = await import(`../../components/philip/fullImage`);

	// 	return Component;
	// };

	const DynamicComponent = dynamic(
		() => import("../components/philip/fullImage"),
		{
			suspense: true,
		}
	);

	return (
		<Suspense fallback={`Loading...`}>
			<main className="flex-1">
				<div className="py-6">
					<div className="px-4 sm:px-6 md:px-0">
						<h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
					</div>
					<div className="px-4 sm:px-6 md:px-0">
						{/* Replace with your content */}
						{components &&
							components.map((el, id) => {
								console.log(el);
								return (
									<div>
										<h1>{el.namespace}</h1>
										<DynamicComponent />
									</div>
								);
							})}
						{/* /End replace */}
					</div>
				</div>
			</main>
		</Suspense>
	);
};

export default FrontPage;
