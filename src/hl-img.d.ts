export function init(): undefined;
export const closenotif: HTMLElement;
export function imageshow(
		action: number,
		elem: {
			id: string;
			style: { opacity: string; cursor: string; height: string; width: string };
			classList: {
				add: (arg0: string) => void;
				remove: (arg0: string) => void;
			};
			setAttribute: (arg0: string, arg1: string) => void;
			dataset: {
				href: null;
				showsrc: string;
				htmlheight: null;
				htmlwidth: null;
				prevsrc: string;
			};
			src: string;
			title: string;
			contains: (arg0: string) => string;
		},
	): undefined;