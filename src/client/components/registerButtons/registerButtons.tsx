import React, { useState } from 'react';
import  { Button, Dialog } from "@mui/material"
import { useMediaQuery } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import Login from '../sessions/Login';
import FlexBox from '../FlexBox';

const RegisterButtons: React.FC = () => {
	const [dialogOpen, setDialogOpen] = useState(false);
	const toggleDialog = () => setDialogOpen(!dialogOpen);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

	return (
		<FlexBox gap="1rem" justifyContent="center">
						
			<Button
				className="button-link"
				variant="outlined"
				color="secondary"
				disableElevation
				onClick={toggleDialog}
				sx={{
					px: "1.75rem",
					height: "44px",
					borderRadius: "8px",
				}}
			>
								Unite como marca
			</Button>
			<Button
				className="button-link"
				variant="contained"
				color="secondary"
				disableElevation
				onClick={toggleDialog}
				sx={{
					px: "1.75rem",
					height: "44px",
					borderRadius: "8px",
				}}
			>
								Unite como mayorista
			</Button>
			<Dialog
				open={dialogOpen}
				fullWidth={isMobile}
				scroll="body"
				onClose={toggleDialog}
			>
				<Login toggleDialog={toggleDialog}/>
			</Dialog>
		</FlexBox>
	)
}

export default RegisterButtons;