import { useState } from "react";

const FAQList = () => {
	const questions = [
		{
			id: 1,
			question: "Wie läuft die Einführung von MediclixCare ab?",
			answer:
				"Zur Einrichtung wird Ihnen ein persönlicher Ansprechpartner zugwiesen, der Ihnen in allen Schritten der Einrichtung zur Seite steht. Zudem stellen wir Ihnen ausführliches Videomaterial zur Schulung Ihrer Mitarbeiter zur Verfügung.",
		},
		{
			id: 2,
			question: "Muss die Software auf Geräten vor Ort installiert werden?",
			answer:
     		"Nein. Die Software ist 100% cloudbasiert und kann von jedem Computer mit Internetzugang bedient werden. Pflegeeinrichtungen / Pflegedienste müssen lediglich unsere App im App Store oder Google Play Store herunterladen.",
		},
		{
			id: 3,
			question:
        "Gibt es Schnittstellen zu Warenwirtschaft und/oder Dokumentation?",
			answer:
				"Wir haben bereits Schnittstellen zu verschiedenen Warenwirtschaftsystemen und arbeiten derzeit an Schnittstellen zu den Dokumentations-Anbietern der Pflegedienstleister. ",
		},
		{
			id: 4,
			question: "Was passiert, wenn Ärzte die Software nicht nutzen wollen?",
			answer:
				"Das ist gar kein Problem. Sie können für jede Arztpraxis individuell auswählen, auf welche Art und Weise die Rezeptanforderungen versendet werden. Entweder per verschlüsseltem Link per Email, per Zugang über unsere Software oder sogar per Fax direkt aus unserem System.",
		},
		{
			id: 5,
			question: "Sind unsere Daten sicher?",
			answer:
        "Ja Datenschutz und Sicherheit werden bei uns großgeschrieben. Wir sind zu 100% DSGVO konform, alle Daten werden auf deutschen Servern gehosted, sind anonymisiert und verschlüsselt.",
		},
	];

	const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);

	const toggleQuestion = (id: number) => {
		setOpenQuestionId((prevId) => (prevId === id ? null : id));
	};

	return (
		<div className="flex flex-col items-center gap-4 w-full lg:w-[50%] mx-auto">
			{questions.map((question) => {
				const isOpen = openQuestionId === question.id;

				const handleKeyDown = (e: any) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						toggleQuestion(question.id);
					}
				};

				return (
					<div
						key={question.id}
						className={`w-full rounded-2xl overflow-hidden transition-all duration-300 lg:p-6 p-2 ${
							isOpen ? "bg-white shadow-md" : ""
						}`}
					>
						<div
							className="flex justify-between items-center w-full gap-x-10 cursor-pointer"
							onClick={() => toggleQuestion(question.id)}
							onKeyDown={handleKeyDown}
							tabIndex={0}
							role="button"
							aria-expanded={isOpen}
							aria-controls={`answer-${question.id}`}
						>
							<h5 className="text-[18px] lg:text-2xl text-[#041437]">
								{question.question}
							</h5>
							<div className="w-5 h-5 p-3 lg:w-8 lg:h-8 rounded-full bg-[#26E1FF] flex items-center justify-center">
								{isOpen ? "−" : "+"}
							</div>
						</div>

						<div
							id={`answer-${question.id}`}
							className={` transition-all duration-300 overflow-hidden text-[16px] lg:text-base text-gray-700 ${
								isOpen ? "max-h-[300px] py-2" : "max-h-0 py-0"
							}`}
						>
							<p className="!text-black py-1">{question.answer}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default FAQList;
