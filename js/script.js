$(document).ready(function() {

			$('#fullpage').fullpage({
				anchors: ['home-page', 'intro-page', 'tools-page','how-to-page','do-and-donts-page'],
				navigation: false,
			});
            window.sr = new scrollReveal();
            jQuery('ul.sf-menu').superfish();
		});
