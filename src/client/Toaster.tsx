import React from 'react';
import { Toaster }  from 'react-hot-toast';

const ToasterElement = () => {
	return (
		<Toaster
			position="bottom-center"
			reverseOrder={false}
			gutter={8}
			containerClassName=""
			containerStyle={{}}
			toastOptions={{
				// Define default options
				className: '',
				duration: 3000,
				style: {
					background: '#FFF',
					color: 'grey.900',
				},
				// Default options for specific types
				success: {
					duration: 3800,
					theme: {
						primary: 'green',
						secondary: 'black',
					},
				},
			}}
		/>
	)
}

export default ToasterElement;