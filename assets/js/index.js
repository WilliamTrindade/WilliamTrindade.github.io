const config = {
	'site_name' : 'William Trindade',
	'initial_year' : 2019

}

function makeCopyright() {
	const d = new Date()
	if(config['initial_year'] != d.getFullYear()) {
		var year = " " + config['initial_year'] +" - "+ d.getFullYear()
	} else {
		var year = " " + config['initial_year']
	}
	document.querySelector('#copy').innerHTML = 
	"© " + config['site_name'] + year + " Todos os direitos reservados."
}

function index() {
	makeCopyright()
}

index()