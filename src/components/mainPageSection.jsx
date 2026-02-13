export function MainPageSection({ title, children, className, first = false }) {
	return (
		<>
			<div className="text-[0.95em]">
				<h3 className={`mr-0 ${first ? 'pt-1' : 'pt-4'} pr-0 font-bold whitespace-pre-line text-black ${className}`}>
					{title}
				</h3>
				{children}
			</div>
		</>
	);
}
