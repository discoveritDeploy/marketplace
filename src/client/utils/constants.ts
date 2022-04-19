export const deviceSize = {
	xs: 425,
	sm: 768,
	md: 1024,
	lg: 1440,
};

export const layoutConstant = {
	topbarHeight: 40,
	grocerySidenavWidth: 280,
	containerWidth: 1200,
	mobileNavHeight: 64,
	headerHeight: 80,
	mobileHeaderHeight: 64,
};

export type Status = {
	value: string,
	label: string
}

export const TABS_STATUS_ORDER: Status[] = [
	{
		value: 'CONFIRMED',
		label: 'Confirmar Orden'
	},
	{
		value: 'INVOICED',
		label: 'Facturar Orden'
	},
	{
		value: 'PAID',
		label: 'Confirmar pago'
	},
	{
		value: 'SHIPPED',
		label: 'Listo para envío'
	},
	{
		value: 'DELIVERED',
		label: 'Entregado'
	}
]