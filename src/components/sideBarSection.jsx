export function SideBarSection({ title, children, first = false }) {
	return (
		<div className={`${!first && 'mt-3'} px-4 `}>
			<h1 className='text-lg font-bold underline'>{title}</h1>
			<i>{children}</i>
		</div>
	);
}
