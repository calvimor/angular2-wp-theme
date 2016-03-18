System.config({
  packages: {        
    [(baseUrl + 'dist')]: {
      format: 'register',
      defaultExtension: 'js'
    }
	}
});
System.import( baseUrl + 'dist/main.js')
      .then(null, console.error.bind(console));