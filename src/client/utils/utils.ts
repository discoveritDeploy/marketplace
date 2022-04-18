import { differenceInMinutes } from "date-fns";
import ceil from "lodash/ceil";

export const getDateDifference = (date: string | number | Date) => {
	let diff = differenceInMinutes(new Date(), new Date(date));
	if (diff < 60) return diff + " minutes ago";

	diff = ceil(diff / 60);
	if (diff < 24) return `${diff} hour${diff === 0 ? "" : "s"} ago`;

	diff = ceil(diff / 24);
	if (diff < 30) return `${diff} day${diff === 0 ? "" : "s"} ago`;

	diff = ceil(diff / 30);
	if (diff < 12) return `${diff} month${diff === 0 ? "" : "s"} ago`;

	diff = diff / 12;
	return `${diff.toFixed(1)} year${ceil(diff) === 0 ? "" : "s"} ago`;
};



export function LastXDays (options: Intl.DateTimeFormatOptions | undefined, days: number) {
	const result = [];
	for (let i=0; i < days; i++) {
		const d = new Date();
		d.setDate(d.getDate() - i);
		if(options){
			
			result.push(d.toLocaleDateString('es-ES', options));
		}else {
			const data = `${d.getDate()}/${d.getMonth()}`
			result.push(data)
		}
		
	}

	return result.reverse();
}

export function LastXMonths (options: Intl.DateTimeFormatOptions | undefined, months: number) {
	const result = [];
	for (let i=0; i < months; i++) {
		const d = new Date();
		d.setMonth(d.getMonth() - i);
		if(options){
			result.push(d.toLocaleDateString('es-ES', options));
		}else {
			const data = `${d.getMonth()}`
			result.push(data)
		}
		
	}

	return result.reverse();
}
