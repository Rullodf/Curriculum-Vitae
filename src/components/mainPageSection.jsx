export function MainPageSection({ title, children, first = false }) {
	return (
		<>
			<h3 className={`mr-0 ${first ? 'pt-1' : 'pt-4'} pr-0 text-base font-bold text-black`}>
				{title}
			</h3>
			{children}
		</>
	);
}
