import { MainPageChapter } from './mainPageChapter';
import { MainPageSection } from './mainPageSection';

export function MainPage() {
	return (
		<div className="h-full pt-6 pr-8 pl-9 " >
			<h1 className="text-generation-blue mr-0 pt-6 pl-0 text-4xl font-bold">
				LORENZO DE FRANCESCO
			</h1>
			<h2 className="mr-0 pt-2 pl-0 text-2xl font-semibold text-black">
				Junior Java Developer
			</h2>
			<div className="pl-6">
				<MainPageChapter title="FORMAZIONE">
					<MainPageSection title="Java Junior Developer" first="true">
						Generation Italy – dic 2024 – apr. 2025 <br />
						Corso di 500 ore per Junior Java Developer<br />
						Durante il corso sono state fornite basi di programmazione a oggetti e in linguaggio Java,
						oltre che nei principali linguaggi di programmazione Front End (HTML, CSS, Javascript).
						2025
					</MainPageSection>

					<MainPageSection title="Laurea Triennale in Ingegneria Informatica">
						<i>Politecnico di Torino – set 2019 – In Corso</i>
					</MainPageSection>

					<MainPageSection title="Diploma di Perito Informatico">
						<i>ITISS G.Salvemini di alessano</i> 2014 - 2019<br />
					</MainPageSection>
				</MainPageChapter>

				<MainPageChapter title="ESPERIENZA PROFESSIONALE">
					<MainPageSection title="Revolution Informatica" first="true">
						- Assemblaggio e riparazione (hardware/software) di Pc portatili e fissi
						- Assistenza tecnica ai clienti in prima persona
					</MainPageSection>
				</MainPageChapter>

				<MainPageChapter title="PROGETTI PERSONALI">
					<MainPageSection title="Curriculum Vitae in React" first="true">
						L&apos;attuale curriculum fatto in React con l&apos;uso di TailwindCSS
					</MainPageSection>

					<MainPageSection title="Scacchi">
						Sito web per giocare a scacchi fatto in React + Vite
					</MainPageSection>

					<MainPageSection title="Universus bot">
						Un bot per il server discord del canale twitch UniversusTTV in Node.js
						con app in Flutter per configurarlo
					</MainPageSection>

					<MainPageSection title="MUD Java">
						Un&apos;avventura testuale realizzata in Java come progetto di gruppo per il corso di
						Generation Italy
					</MainPageSection>
				</MainPageChapter>
			</div>
		</div>
	);
}
