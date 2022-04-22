import * as React from 'react';
import { Backdrop, CircularProgress} from '@mui/material';
import FlexBox from '../FlexBox';
import InConstruction from '../inConstruction/inConstruction';

const FullPageLoader: React.FC = () => (
	<Backdrop
		sx={{ color: 'rgba(255,255,255,.7)', zIndex: 10 }}
		open={true}
	>
		<FlexBox height="100%" alignItems="center" justifyContent="center">
			<CircularProgress />
		</FlexBox>
	</Backdrop>
);

export default FullPageLoader