import React, { FC } from 'react'
import { TableBody, TableContainer, TableHead, Table, TableCell, TableRow, styled } from "@mui/material";
import { LastXMonths } from '@client/utils/utils';
import InformationTooltip from '../tooltip/tooltip';
import FormattedNumber from '../formattedNumber/formattedNumber';

interface RowField {
	label: string[],
	values: number[],
}

const SalesLastsMonths: FC = () => {
	const head = ['Ultimos 4 meses', ...LastXMonths({month: 'long'}, 4)]
	const rows: RowField[] = [
		{
			label: ['Ingresos totales',"Tooltip data"],
			values: [2523, 3122, 4554, 3400]
		},
		{
			label: ['Ventas',"Tooltip data"],
			values: [3000, 4354, 6234, 2768]
		},
		{
			label: ['Ticket Promedio',"Tooltip data"],
			values: [1533076, 24442565, 3210899, 2566435]
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

	const renderRowComponents = <T extends number[] | string[]>(key: string, value: T): JSX.Element | JSX.Element[] => {
		switch (key) {
		case "label": return <StyledCell2 color="grey.500"><InformationTooltip infoText={value[1] as string}>{value[0]}</InformationTooltip></StyledCell2>;
		case "values":return value.map((v: number | string, i: number) => (<StyledCell key={v as number +i}><FormattedNumber value={v as number} type="decimal"/></StyledCell>));
			break;
		default: return <StyledCell></StyledCell>
		}
	}
    
	return (
		<StyledTableContainer>
			<Table sx={{borderCollapse: "separate !important", borderSpacing: "8px", overflow: 'visible'}}>
				<TableHead>
					{
						head.map((th, i)=> <StyledCell2 key={i}>{th}</StyledCell2>)
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

export default SalesLastsMonths;