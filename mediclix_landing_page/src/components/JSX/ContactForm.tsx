import React, { useEffect } from "react";

const ContactForm = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://js-eu1.hsforms.net/forms/embed/v2.js";
		script.type = "text/javascript";
		script.charset = "utf-8";
		script.onload = () => {
			//@ts-ignore
			if (window.hbspt) {
				//@ts-ignore
				window.hbspt.forms.create({
					portalId: "26610175",
					formId: "23446e7c-baae-478b-be17-112809fe3d0f",
					region: "eu1",
					target: "#form",
				});
			}
		};
		document.body.appendChild(script);

		// Optional cleanup (remove script on unmount)
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div
			id="form"
			className="w-[100%] lg:w-[50%] p-5 lg:p-10 bg-gray-50 rounded-2xl"
		></div>
	);
};

export default ContactForm;

{
	/* <script src="https://js-eu1.hsforms.net/forms/embed/145989857.js" defer></script>
<div class="hs-form-frame" data-region="eu1" data-form-id="08aaf656-2ea3-44d8-8761-4c76dcf323af" data-portal-id="145989857"></div> */
}
