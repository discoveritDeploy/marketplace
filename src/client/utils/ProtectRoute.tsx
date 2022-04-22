import React, { useEffect } from 'react';
import { useAuth } from './AuthProvider';
import FullPageLoader from '@client/components/circularProgress/circularProgress';

const ProtectRoute: React.FC = ({ children }) => {
	const { isAuthenticated } = useAuth();
	console.log('isAuthenticated: ', isAuthenticated)
	
	if ((!isAuthenticated && typeof window !== "undefined" && window?.location?.pathname !== '/')){
			
		return <FullPageLoader />; 
	}

	return <>{children}</>;
};

export default ProtectRoute;