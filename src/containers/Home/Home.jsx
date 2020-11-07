import React from "react";
import Welcome from '../../components/Welcome';
import Main from '../../components/Main';
import Footer from '../../components/Main';
import Gorilla from "../Gorilla";
import words from "../../data/data";
import { Link } from "@reach/router";

const Home = () => { return (
<div>
<Welcome words = {words} />
<Main words = {words}/>
<Footer words = {words} /><p>Home works</p>
</div>
)
}

export default Home;