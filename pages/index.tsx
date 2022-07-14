import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { LockClosedIcon } from "@heroicons/react/solid";
import Login from "./login";
import { useSelector } from "react-redux";
import { getRegisteredComponents } from "../redux/componentsSlice";

const Home: NextPage = () => {
	const components = useSelector(getRegisteredComponents);

	return (
		<div>
			<h1>Welcome to Dashlay</h1>
			{/* Skal loade alle komponenter */}
		</div>
	);
};

export default Home;
