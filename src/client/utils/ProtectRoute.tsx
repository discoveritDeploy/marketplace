import React from 'react';
import { useAuth } from './AuthProvider';
import FullPageLoader from '@client/components/circularProgress/InConstruction';
import { Auth } from '@client/types/commonTypes'

const ProtectRoute: React.FC = ({ children }) => {
	const { isAuthenticated } = useAuth() as Auth
	
	if ((!isAuthenticated && typeof window !== "undefined" && window?.location?.pathname !== '/')){
			
		return <FullPageLoader />; 
	}

	return <>{children}</>;
};

export default ProtectRoute;