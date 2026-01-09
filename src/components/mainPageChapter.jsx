export function MainPageChapter({ title, children }) {
	return (
		<>
			<h2 className="text-generation-blue mt-2 mr-0 pt-2 pr-0 text-2xl font-semibold">
				{title}
			</h2>
			{children}
		</>
	);
}
