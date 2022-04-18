import React, { FC } from 'react'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { TableBody, TableContainer, TableHead, Table, TableCell, TableRow, Box, styled } from "@mui/material";
import Image from 'next/image';
import { Paragraph } from '../Typography';
import FormattedNumber from '../formattedNumber/formattedNumber';

interface RowField {
	icon: JSX.Element,
	thumbnail: string,
	title: string,
	price: number,
	selled: number,
	stock: number
}

const TopProducts: FC = () => {
	const head = ['', 'Imagen', 'Título', 'Precio', 'Ventas Q', 'Stock']
	const rows: RowField[] = [
		{
			icon: <EmojiEventsIcon color="primary" width="3em !important" height="3em !important" />,
			thumbnail: '',
			title: "Juego de Sábanas Pima Peruano",
			price: 5500,
			selled: 150,
			stock: 350
		},
		{
			icon: <EmojiEventsIcon color="primary" />,
			thumbnail: '',
			title: "Juego de Sábanas Pima Peruano",
			price: 5500,
			selled: 150,
			stock: 350
		},
		{
			icon: <EmojiEventsIcon color="primary" />,
			thumbnail: '',
			title: "Juego de Sábanas Pima Peruano",
			price: 5500,
			selled: 150,
			stock: 350
		},
		{
			icon: <EmojiEventsIcon color="primary"  />,
			thumbnail: '',
			title: "Juego de Sábanas Pima Peruano",
			price: 5500,
			selled: 150,
			stock: 350
		},
		{
			icon: <EmojiEventsIcon color="primary" />,
			thumbnail: '',
			title: "Juego de Sábanas Pima Peruano",
			price: 5500,
			selled: 150,
			stock: 350
		},
	]

	const StyledCell = styled(TableCell)(({theme}) => ({
		color: theme.palette.text.paragraph,

	}))

	const StyledCell2 = styled(TableCell)(({theme}) => ({
		color: theme.palette.text.muted,
		fontWeight: "500",

	}))

	const StyledTableContainer = styled(TableContainer)(({theme}) => {
		console.log('theme: ', theme)
		return {
			background: theme.palette.background.main,
			marginTop: '32px',
			borderRadius: "8px",
			padding: "8px",
			boxShadow: theme.shadows[1],
		}
		
	})

	const renderRowComponents = <T extends string | JSX.Element | number>(key: string, value: T): JSX.Element => {
		switch (key) {
		case "icon": return <StyledCell>{value as JSX.Element}</StyledCell> 
		case "thumbnail": return <StyledCell><Box><Image src="/assets/images/temporalThumbnail.png" width="36px" height="36px" /></Box></StyledCell>;
		case "title": return <StyledCell2 color="grey.500"><Paragraph>{value}</Paragraph></StyledCell2>;
		case "price": return <StyledCell><FormattedNumber value={value as number} type="currency"/></StyledCell>;
		case "selled": return <StyledCell><FormattedNumber value={value as number} type="decimal"/></StyledCell>;
		case "stock": return <StyledCell><FormattedNumber value={value as number} type="decimal"/></StyledCell>;
		default: return <StyledCell></StyledCell>
		}
	}
    
	return (
		<StyledTableContainer>
			<Table sx={{borderCollapse: "separate !important", borderSpacing: "8px"}}>
				<TableHead>
					{
						head.map((th)=> <StyledCell2 key={th}>{th}</StyledCell2>)
					}
				</TableHead>
				<TableBody>
					
					{
						rows.map((r) => (
							<TableRow sx={{boxShadow: "0px 1px 3px rgba(3, 0, 71, 0.09)", marginTop: "15px", border: "separate"}} >
								{
									Object.keys(r).map((k) => renderRowComponents(k, r[k as keyof RowField]))
								}
							</TableRow>
						))
					}
				</TableBody>
			</Table>
		</StyledTableContainer>
	)
}

export default TopProducts;