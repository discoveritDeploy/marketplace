import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import FlexBox from '../FlexBox';
import InConstruction from '../inConstruction/inConstruction';

const FullPageLoader: React.FC = () => (
	<Backdrop
		sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
		open={true}
	>
		<FlexBox height="100%" alignItems="center" justifyContent="center">
			<InConstruction />
		</FlexBox>
	</Backdrop>
);

export default FullPageLoader