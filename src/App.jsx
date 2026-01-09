import { useRef } from 'react';
import { MainPage } from './components/mainPage';
import { Sidebar } from './components/sidebar';
import { useReactToPrint } from 'react-to-print';

function App() {
	const contentRef = useRef();

	const handlePrint = useReactToPrint({
		contentRef,
	});

	return (
		<>
			<button onClick={handlePrint} type="button" style={{ padding: '10px 20px', marginBottom: '20px' }}>Print CV</button>
			<div ref={contentRef} id="page" className="cv-page flex flex-row bg-white font-sans font-normal" >
				<Sidebar />
				<div className='flex flex-col text-black'>
					<MainPage />
					<footer className='px-10 pb-2 text-center text-xs font-medium italic'>
						Autorizzo il trattamento dei dati personali contenuti nel
						mio curriculum vitae in base all’art. 13 del D. Lgs. 196/2003 e all’art. 13 GDPR 679/16.
					</footer>
				</div>
			</div>
		</>
	);
}

export default App;

