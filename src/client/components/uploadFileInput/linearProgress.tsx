import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useInterval from '@client/hooks/useSetInterval'

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<Box sx={{ width: '100%', mr: 1 }}>
				<LinearProgress variant="determinate" {...props} />
			</Box>
			<Box sx={{ minWidth: 35 }}>
				<Typography variant="body2" color="text.secondary">{`${Math.round(
					props.value,
				)}%`}</Typography>
			</Box>
		</Box>
	);
}

interface LinearPogressProps {
	startProgress: boolean | null,
	callbackWhenFinish: () => void
}

export default function LinearWithValueLabel({startProgress, callbackWhenFinish}: LinearPogressProps) {
	const [progress, setProgress] = React.useState(0);
	const delay = startProgress && 800
	
	const handleProgress = () =>{ 
		setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10))
		if(progress >= 100){
			callbackWhenFinish()
		}
	}
	useInterval(handleProgress, delay)

	return (
		<Box sx={{ width: '100%' }}>
			<LinearProgressWithLabel value={progress} />
		</Box>
	);
}