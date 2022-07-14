import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import {
	addComponent,
	getRegisteredComponents,
} from "../../redux/componentsSlice";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const AddComponents = () => {
	const registeredComponents = useSelector(getRegisteredComponents);
	const [componentNames, setComponentNames] = useState<string[]>();
	const dispatch = useDispatch();

	useEffect(() => {
		if (registeredComponents) {
			// let names = registeredComponents.map((el) => {
			// 	return {
			// 		name: el
			// 			.split("/")[1]
			// 			.replace(/([A-Z])/g, " $1")
			// 			.trim()
			// 			.toLocaleLowerCase(),
			// 		namespace: el,
			// 	};
			// });

			let names: string[] = registeredComponents.map((el) => el.toString());

			setComponentNames(names);
		}
	}, []);

	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
					Add component
					<ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						{componentNames?.map((el) => (
							<Menu.Item>
								<a
									href="#"
									className="bg-gray-100 text-gray-900 block px-4 py-2 text-sm"
									onClick={(e) => dispatch(addComponent(el))}
								>
									{el}
								</a>
							</Menu.Item>
						))}
						{/* {Object.entries(componentNames).forEach(([key, value]) => {
							console.log("Value", value);

							return (
								<Menu.Item>
									<a href="#" className="bg-gray-100 text-gray-900"></a>
								</Menu.Item>
							);
						})} */}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default AddComponents;
