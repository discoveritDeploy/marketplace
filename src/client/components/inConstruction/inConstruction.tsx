import * as React from 'react';
import { Box, Backdrop } from '@mui/material'
import FlexBox from '../FlexBox';
import { H2, Paragraph } from '../Typography';
import Logo from '@public/assets/images/logo.png'
import Image from 'next/image';

const InConstruction: React.FC = () => (
	<Backdrop
		sx={{ background: 'rgba(255,255,255,0.8)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
		open={true}
	>
		<FlexBox height="100%" flexDirection="column" alignItems="center" justifyContent="center">
			<Box mb={5}>
			    <Image src={Logo} placeholder="blur" />
			</Box>
			<H2 mb={5} fontSize="32px">Sitio en construcción.</H2>
			<Paragraph fontSize="20px">
                Pronto tendra novedades
			</Paragraph>
		</FlexBox>
	</Backdrop>
);

export default InConstruction