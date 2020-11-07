import React from "react";
import Welcome from '../../components/Welcome';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import words from "../../data/data";

const Home = () => { return (
<div>
<Welcome words = {words} />
<Main words = {words}/>
<Footer words = {words} />
</div>
)
}

export default Home;