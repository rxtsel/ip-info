document.addEventListener('DOMContentLoaded', () => {
	const OPTIONS = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '9659cae629msh42add1632d355adp1a4ad1jsn573d92de183a',
			'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
		}
	};

	const fetchIP = ip => {
		return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS)
			.then(response => response.json())
			.catch(error => console.error(error))
	}

	const $ = selector => document.querySelector(selector)

	const form = $('#form')
	const IP = $('#ip')
	const submit = $('#submit')
	const results = $('#results')

	form.addEventListener('submit', async e => {
		e.preventDefault()

		const { value } = IP

		if (!value) return

		submit.setAttribute('disabled', '')
		submit.setAttribute('aria-busy', 'true')

		const ipInfo = await fetchIP(value)

		if(ipInfo) {	
			results.innerHTML = JSON.stringify(ipInfo, null, 2)
		}

		submit.removeAttribute('disabled')
		submit.removeAttribute('aria-busy')	

	})

})
