import React, { useContext, useDebugValue, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import "../../styles/home.scss";

const Item = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.detail.name}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the content.
				</p>
				<Link to={"/character/" + props.detail.uid}>
					<button type="button" className="btn btn-primary">
						Go to the details!
					</button>
				</Link>
			</div>
		</div>
	);
};

const ItemList = props => {
	const htmlItems = props.items.map((item, index) => {
		return <Item key={index} detail={item} />;
	});
	return <div>{htmlItems}</div>;
};

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>

			<ItemList items={store.characters} />

			<p>
				<img src={rigoImageUrl} />
			</p>
			<div className="alert alert-info">{store.message || "Loading message from the backend..."}</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p>
		</div>
	);
};

ItemList.propTypes = {
	items: PropTypes.array
};

Item.propTypes = {
	detail: PropTypes.object
};
