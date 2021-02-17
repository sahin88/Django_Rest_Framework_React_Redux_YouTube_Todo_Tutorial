import { Route, Link, Switch, Redirect } from "react-router-dom";

	import React from "react";

	export default function ProtectedRoute({ component: Component, ...res }) {
	  let token =  false//localStorage.getItem("token");
	  return (
	    <Route
	      {...res}
	      render={(props) =>
		token ? (
		  <Component {...props} />
		) : (
		  <Redirect to={{ pathname: "/login" }} />
		)
	      }
	    />
	  );
	}
