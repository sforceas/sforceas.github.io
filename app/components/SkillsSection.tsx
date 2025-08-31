const SkillsSection = () => {
	const skills = [
		{
			category: 'Llenguatges i tecnologíes',
			items: ['Python', 'Ruby','JavaScript','Typescript', 'Bash', 'IA'],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.01005 0.858582L6.01005 14.8586L7.98995 15.1414L9.98995 1.14142L8.01005 0.858582Z" fill="#9DA2AF"></path> <path d="M12.5 11.5L11.0858 10.0858L13.1716 8L11.0858 5.91422L12.5 4.5L16 8L12.5 11.5Z" fill="#9DA2AF"></path> <path d="M2.82843 8L4.91421 10.0858L3.5 11.5L0 8L3.5 4.5L4.91421 5.91422L2.82843 8Z" fill="#9DA2AF"></path> </g></svg>
			),
		},
		{
			category: 'Backend',
			items: ['Django', 'FastAPI', 'Flask', 'Ruby on Rails', 'Celery'],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
				</svg>
			),
		},
		{
			category: 'Frontend',
			items: ['React', 'Next.js','Webpack', 'Cypress (testing)'],
			icon: (

				<svg className="w-4 h-4" viewBox="0 0 36 36" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<g>
						<path fill="#808184" d="M14.191,16.087c-0.195-0.195-0.512-0.195-0.707,0l-3.517,3.516c-0.094,0.094-0.146,0.221-0.146,0.354 s0.053,0.26,0.146,0.354l3.517,3.517c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146 c0.195-0.195,0.195-0.512,0-0.707l-3.163-3.163l3.163-3.163C14.386,16.599,14.386,16.283,14.191,16.087z"></path>
						<path fill="#808184" d="M19.857,23.827c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146l3.516-3.517 c0.195-0.195,0.195-0.512,0-0.707l-3.516-3.516c-0.195-0.195-0.512-0.195-0.707,0s-0.195,0.512,0,0.707l3.163,3.163l-3.163,3.163 C19.662,23.315,19.662,23.632,19.857,23.827z"></path>
						<path fill="#808184" d="M17.383,16.325l-1.671,7.033c-0.064,0.269,0.102,0.539,0.371,0.602c0.039,0.009,0.078,0.014,0.116,0.014 c0.226,0,0.431-0.155,0.486-0.384l1.671-7.033c0.064-0.269-0.102-0.539-0.371-0.602C17.718,15.892,17.448,16.057,17.383,16.325z"></path>
						<path fill="#808184" d="M0,30.5C0,31.327,0.673,32,1.5,32h33c0.827,0,1.5-0.673,1.5-1.5v-18c0-0.276-0.224-0.5-0.5-0.5 S35,12.224,35,12.5v18c0,0.276-0.224,0.5-0.5,0.5h-33C1.224,31,1,30.776,1,30.5v-18C1,12.224,0.776,12,0.5,12S0,12.224,0,12.5V30.5 z"></path>
						<path fill="#808184" d="M34.5,0h-33C0.673,0,0,0.673,0,1.5v8C0,10.327,0.673,11,1.5,11h33c0.827,0,1.5-0.673,1.5-1.5v-8 C36,0.673,35.327,0,34.5,0z M35,9.5c0,0.276-0.224,0.5-0.5,0.5h-33C1.224,10,1,9.776,1,9.5v-8C1,1.224,1.224,1,1.5,1h33 C34.776,1,35,1.224,35,1.5V9.5z"></path>
						<circle fill="#808184" cx="4" cy="5.5" r="1"></circle>
						<circle fill="#808184" cx="7" cy="5.5" r="1"></circle>
						<circle fill="#808184" cx="10" cy="5.5" r="1"></circle>
					</g>
				</svg>
			),
		},
		{
			category: 'Infraestructura',
			items: ['Linux', 'Docker', 'PostgreSQL','MySQL' ,'Jenkins'],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9DA2AF" strokeWidth="2">
					<path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
				</svg>
			),
		},
		{
			category: 'Formació',
			items: ['Grau en Enginyeria dels Materials (UB)', 'Màster en Enginyeria Biomèdica (EHU)', 'Desenvolupament web Fullstack (autodidacta)'],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.8978 16H7.89778C6.96781 16 6.50282 16 6.12132 16.1022C5.08604 16.3796 4.2774 17.1883 4 18.2235" stroke="#9DA2AF" stroke-width="1.5"></path> <path d="M8 7H16" stroke="#9DA2AF" stroke-width="1.5" stroke-linecap="round"></path> <path d="M8 10.5H13" stroke="#9DA2AF" stroke-width="1.5" stroke-linecap="round"></path> <path d="M13 16V19.5309C13 19.8065 13 19.9443 12.9051 20C12.8103 20.0557 12.6806 19.9941 12.4211 19.8708L11.1789 19.2808C11.0911 19.2391 11.0472 19.2182 11 19.2182C10.9528 19.2182 10.9089 19.2391 10.8211 19.2808L9.57889 19.8708C9.31943 19.9941 9.18971 20.0557 9.09485 20C9 19.9443 9 19.8065 9 19.5309V16.45" stroke="#9DA2AF" stroke-width="1.5" stroke-linecap="round"></path> <path d="M10 22C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H14C16.8284 2 18.2426 2 19.1213 2.87868C20 3.75736 20 5.17157 20 8M14 22C16.8284 22 18.2426 22 19.1213 21.1213C20 20.2426 20 18.8284 20 16V12" stroke="#9DA2AF" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>			),
		},
		{
			category: 'Idiomes',
			items: ['Català (nadiu)', 'Castellà (nadiu)', 'Anglès (B1)'],
			icon: (
				<svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#9DA2AF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M8 15H3.5A2.502 2.502 0 0 1 1 12.5v-9A2.502 2.502 0 0 1 3.5 1h9A2.502 2.502 0 0 1 15 3.5V8h-1V3.5A1.502 1.502 0 0 0 12.5 2h-9A1.502 1.502 0 0 0 2 3.5v9A1.502 1.502 0 0 0 3.5 14H8zm-.038-4.811a9.77 9.77 0 0 1-3.766 1.796l-.242-.97a8.816 8.816 0 0 0 3.282-1.532A9.264 9.264 0 0 1 4.888 5H4V4h3.279l-.544-.544.707-.707L8.692 4H12v1h-.914A9.836 9.836 0 0 1 9.78 8.152a3.853 3.853 0 0 0-1.82 2.037zm.032-1.383A8.167 8.167 0 0 0 10.058 5H5.922a8.18 8.18 0 0 0 2.072 3.806zM23 20.447v-8.894A2.525 2.525 0 0 0 20.484 9h-8.931A2.556 2.556 0 0 0 9 11.553v8.894A2.556 2.556 0 0 0 11.553 23h8.894A2.556 2.556 0 0 0 23 20.447zM20.484 10A1.517 1.517 0 0 1 22 11.516v8.968A1.517 1.517 0 0 1 20.484 22h-8.968A1.517 1.517 0 0 1 10 20.484v-8.968A1.517 1.517 0 0 1 11.516 10zm-2.086 8h-4.796l-1.159 2.23-.886-.46L16 11.215l4.443 8.555-.886.46zm-.52-1L16 13.385 14.122 17z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>			),
		},

	];

	return (
		<div className="py-6 bg-white px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">Habilitats</h3>
					<div className="h-px w-full bg-gray-200 mt-2" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{skills.map((skillGroup) => (
						<div key={skillGroup.category}>
							<div className="flex items-center space-x-2 mb-2">
								{skillGroup.icon}
								<h4 className="text-sm font-medium text-gray-600">{skillGroup.category}</h4>
							</div>
							<div className="flex flex-wrap gap-1.5">
								{skillGroup.items.map((skill) => (
									<span key={skill} className="px-2.5 py-1 text-sm bg-gray-50 text-gray-700 rounded-full ring-1 ring-gray-200">
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SkillsSection;
