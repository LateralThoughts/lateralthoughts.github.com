require.config({
	baseUrl: '/js',
	paths: {
		jquery: 'jquery-1.10.2.min',
		moment: 'moment.min',
		Handlebars: 'handlebars-v1.3.0'
	},
	shim: {
		underscore: {
            exports: '_'
        },
        Handlebars: {
        	exports: 'Handlebars'
        }
	}
});

require(
	[
		'jquery', 'moment', 'rssAggregator', 'underscore', 
		'text!tpl/expanded_blog_post.tpl', 'text!tpl/footer_blog_post.tpl',
		'bootstrap'
	], 
	function($, moment, rss, _, expandedPostTemplate, footerPostTemplate) {

		var $expanded_posts = $('#full_rss_version'),
			$footer_posts = $('#last_posts'),
			feedUrls = [
				'http://www.eventuallycoding.com/index.php/feed/',
				'http://florent.biville.net/?feed/atom',
				'http://www.java-freelance.fr/feed',
				'http://ogirardot.wordpress.com/feed/'
			];

		moment.lang('fr');

		if ($expanded_posts.length) {
			rss.aggregate(
				feedUrls, 
				$expanded_posts.attr('data-rss-num'),
				$expanded_posts,
				expandedPostTemplate
			);
		}

		rss.aggregate(
			feedUrls, 
			$footer_posts.attr('data-rss-num'),
			$('ul', $footer_posts),
			footerPostTemplate
		);
});