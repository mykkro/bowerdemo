requirejs.config({
    baseUrl: 'bower_components',
    paths: {
        app: '..',
	jquery: 'jquery/jquery'
    },
    shim: {
        underscore: {
            exports: '_'
        }
    }
});

require(['jquery'], function($) {
	$("#test").html("Bower with RequireJS")
})
