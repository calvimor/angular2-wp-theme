<?php

function my_scripts() {

	function register_vendor_script($script, $path) {
		wp_register_script($script, get_stylesheet_directory_uri().'/node_modules/'.$path);
	}

	register_vendor_script('es6-shim', 'es6-shim/es6-shim.min.js');
	register_vendor_script('system-polyfills', 'systemjs/dist/system-polyfills.js');
	register_vendor_script('angular2-polyfills', 'angular2/bundles/angular2-polyfills.js');

	register_vendor_script('system', 'systemjs/dist/system.src.js');
	register_vendor_script('Rx', 'rxjs/bundles/Rx.js');
	register_vendor_script('angular2', 'angular2/bundles/angular2.dev.js');
	register_vendor_script('angular2-router', 'angular2/bundles/router.dev.js');
	register_vendor_script('angular2-http', 'angular2/bundles/http.dev.js');

	wp_enqueue_script(
  	'system-start',
  	get_stylesheet_directory_uri().'/dist/system-start.js',
  	array('es6-shim', 'system-polyfills', 'angular2-polyfills', 'system', 'Rx', 'angular2', 'angular2-router', 'angular2-http')
  );

	wp_localize_script(
		'system-start',
		'baseUrl',
		trailingslashit(get_template_directory_uri())
	);

}
add_action( 'wp_enqueue_scripts', 'my_scripts');

?>