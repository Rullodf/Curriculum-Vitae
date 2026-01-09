import logo from '../assets/generation-logo.png';
import profilePic from '../assets/pfp.jpg';
import { SideBarSection } from './sideBarSection';
import { ContactLabel } from './contactLable';
import phoneIcon from '../assets/phone-icon.png';
import emailIcon from '../assets/email-icon.png';
import homeIcon from '../assets/home-icon.png';
import birthdayIcon from '../assets/birthday-icon.svg';
import linkedinIcon from '../assets/linkedin-icon.png';
import githubIcon from '../assets/github-icon.svg';

export function Sidebar() {
	return (
		<div className=" bg-generation-blue flex w-[7cm] shrink-0 flex-col text-white" >
			<div className='mx-3 my-4 w-[30mm]'>
				<img src={logo} alt="Generation Logo" />
			</div>
			<div className='mx-auto flex h-[5cm] w-[5cm] items-center justify-center overflow-hidden rounded-full bg-amber-100'>
				<img src={profilePic} alt="Profile Picture" className='h-full w-full object-cover' />
			</div>
			<SideBarSection title="CONTATTI" first="true" >
				<ContactLabel img={phoneIcon}>
					+39 3807791544
				</ContactLabel>
				<ContactLabel img={emailIcon}>
					defrancescolorenzo09@gmail.com
				</ContactLabel>
				<ContactLabel img={birthdayIcon}>
					{'23/02/2000\nGagliano del capo'}
				</ContactLabel>
				<ContactLabel img={homeIcon}>
					{'Via Salvatore Farina 8\n10139, Torino (TO)'}
				</ContactLabel>
				<ContactLabel img={linkedinIcon}>
					<a href='https://www.linkedin.com/in/lorenzo-de-francesco-99ab8b2a6/' className='italic underline'>
						Profilo LinkedIn
					</a>
				</ContactLabel>
				<ContactLabel img={githubIcon}>
					<a href='https://github.com/Rullodf' className='italic underline'>
						Profilo GitHub
					</a>
				</ContactLabel>
			</SideBarSection>
			<SideBarSection title="PROFILO">
				dkfeajncek akejdnkajnda kj
			</SideBarSection>
			<SideBarSection title="AREE DI COMPETENZA">
				<b>IT</b>: Java, Javascript, Typescript, React, C++, C#, GDScript, NodeJS, MYSQL, Python, Docker, Dart, Flutter <br />
				<b>SOFT</b>: Teamwork, Problem Solving, Pensiero Critico, Adattabilità, Creatività.
			</SideBarSection>
			<SideBarSection title="LINGUE">
				Italiano: Madrelingua <br />
				Inglese: Avanzato
			</SideBarSection>
		</div>
	);
}
