import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { ProSidebarProvider } from "react-pro-sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			{/* <ProSidebarProvider> */}
			<App />
			{/* </ProSidebarProvider> */}
		</BrowserRouter>
	</React.StrictMode>
);
