import React, { SyntheticEvent, useState } from 'react'
import FlexBox from '../FlexBox';
import { Card, Button, Box} from '@mui/material';
import LinearWithValueLabel from './linearProgress';
import toast from 'react-hot-toast';

const UploadFileInput = () => {
	const [disabled, setDisabled] = React.useState(false)
	const [fileSelected, setFileSelected] = useState<File>()
	const [startProgress, setStartProgress] = useState<null | boolean>(null)

	const handleProgress = (value: null | boolean) => setStartProgress(value)

	const handleDisabledButton = () => setDisabled(prevState => !prevState)
    
	const uploadFile = function (element: HTMLInputElement) {
		handleDisabledButton()
		handleProgress(true)
        
		if (element.files && element.files[0]) {
			const formData = new FormData();
			formData.append("image", element.files[0] as File);
		}

		return element.value = ""
	};

	const handleFinishProgress = () => {
		handleProgress(null)
		handleDisabledButton()
		toast.success('Factura cargada', {
			position: 'top-center',
		})
	}
	return (
		<Card sx={{ p: "20px 30px", }}>
			<FlexBox p="16px 0" alignItems="center" justifyContent="space-between">
				<label htmlFor="raised-button-file">
					<Button
						disabled={disabled}
						variant="contained"
						color="primary"
						component="label"
					>
        Cargar Archivo
						<input
							id="raised-button-file"
							type="file"
							hidden
							multiple
							onChange={(e: SyntheticEvent) => uploadFile(e.target as HTMLInputElement)}
						/>
					</Button>
				</label>
				<Box sx={{flexGrow: "1", padding: "8px 16px"}}>
					<LinearWithValueLabel 
						startProgress={startProgress}
						callbackWhenFinish={handleFinishProgress}
					/> 
				</Box>
			</FlexBox>
		</Card>
	)
}

export default UploadFileInput;