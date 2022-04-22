import DashboardPageHeader from "@client/components/layout/DashboardPageHeader";
import VendorDashboardLayout from "@client/components/layout/VendorDashboardLayout";
import VendorOrderList from "@client/components/orders/VendorOrderList";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import { dataKpiOrders } from '@client/fake-db/server/superstore-shop/super-store-data'
import React from "react";
import KpiCards from "@client/components/kpiCards/kpiCards";

const Orders = () => {
	return (
		<VendorDashboardLayout>
			<DashboardPageHeader title="Ordenes" icon={ShoppingBag} />
			<KpiCards cardList={dataKpiOrders}/>
			<VendorOrderList />
		</VendorDashboardLayout>
	);
};

export default Orders;
