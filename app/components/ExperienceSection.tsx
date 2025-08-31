const ExperienceSection = () => {
	const experiences = [
		{
			role: 'Desenvolupador web fullstack',
			company: 'Databot Tecnologies',
			period: '2023 - Actual',
			highlights: 'Lideratge del desenvolupament de Pomelo, una pataforma de IA experta en el teu sector que dona respostes precisses i fonamentades. Manteniment i millora de programes de gestió empresarial, biblioteques digitals i gestors de coneixement.',
		},
		{
			role: 'Soci cooperatiu',
			company: 'Abarka Coop',
			period: '2022 - 2023',
			highlights: 'Soci cooperatiu encarregat de logística i tecnologia on vaig desenvolupar un RPA per a millorar la gestió interna dels serveis de càtering.',
		},
		{
			role: 'Desenvolupador web fullstack',
			company: 'Dunia Kato',
			period: '2021 - 2022',
			highlights: 'Participació en projectes de cooperació internacional al Senegal. Desenvolupament del aplicatiu intern per a la gestió de projectes.',
		},
		{
			role: 'Enginyer de innonvació',
			company: 'Phibo CAD-CAM',
			period: '2019 - 2021',
			highlights: 'Recerca en productes per al sector odontològic, indrustrialització i gestió de la qualitat. Creació del prototip del software intern per a la gestió normativa dels productes.',
		},
	];

	return (
		<div className="py-6 bg-white px-6">
			<div className="space-y-4 max-w-2xl mx-auto">
				<div>
					<h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">Experiència</h3>
					<div className="h-px w-full bg-gray-200 mt-2" />
				</div>

				<div className="space-y-5">
					{experiences.map((exp) => (
						<div key={exp.company} className="relative">
							<div className="relative pl-4 border-l-2 border-gray-200">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300" />

								<div className="space-y-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between">
										<h4 className="text-md font-medium text-gray-900">{exp.role}</h4>
										<span className="text-sm text-gray-500">{exp.period}</span>
									</div>
									<p className="text-sm font-medium text-gray-600">{exp.company}</p>
									<p className="text-sm text-gray-600 leading-relaxed">{exp.highlights}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
