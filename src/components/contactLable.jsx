export function ContactLabel({ img, children }) {
	return (
		<div className="flex flex-row items-center gap-3 text-base">
			<img src={img} alt="phoneIcon" className='h-[7mm] w-[7mm]' />
			<div className="pt-2  wrap-anywhere whitespace-pre-wrap">{children}</div>
		</div>
	);
}
