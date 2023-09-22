import React, { useState } from "react";


const Home = () => {
	const [counter, setCounter] = useState(0)

	
	const startCounter = () => {
		setInterval(() => {
			setCounter(counter => counter + 1)
		}, 1000)
	}

	return (
		<div className="container mt-5 bg-dark">
			<div className="row justify-content-center gap-2 text-center p-4">
				<div className="icon border border-success col-1 text-center bg-secondary text-light rounded-3"><i className="fa-regular fa-clock fs-1 pt-2"></i></div>
				<div className="six border border-success col-1 fs-1 bg-secondary text-light rounded-3">{Math.floor((counter / 100000) % 10)}</div>
				<div className="five border border-success col-1 fs-1 bg-secondary text-light rounded-3">{Math.floor((counter / 10000) % 10)}</div>
				<div className="four border border-success col-1 fs-1 bg-secondary text-light rounded-3">{Math.floor((counter / 1000) % 10)}</div>
				<div className="thre border border-success col-1 fs-1 bg-secondary text-light rounded-3">{Math.floor((counter / 100) % 10)}</div>
				<div className="two border border-success col-1 fs-1 bg-secondary text-light rounded-3">{Math.floor((counter / 10) % 10)}</div>
				<div className="one border border-success col-1 fs-1 bg-secondary text-light rounded-3">{Math.floor((counter / 1) % 10)}</div>
			</div>
			<div className="col justify-content-center text-center p-4">
				<button type="button" className="btn btn-primary" onClick={startCounter}>Start</button>
			</div>
		</div> 
	);
};

export default Home;
