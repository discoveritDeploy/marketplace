import { Container } from "@mui/material";
import React from "react";
import Navbar from "../navbar/Navbar";
import AppLayout from "./AppLayout";

const NavbarLayout: React.FC = ({ children }) => {
	return (
		<AppLayout navbar={<Navbar />}>
			<Container sx={{ my: "1rem", width: "100%" }}>{children}</Container>
		</AppLayout>
	);
};

export default NavbarLayout;
