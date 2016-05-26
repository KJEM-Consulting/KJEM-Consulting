<?php
/**
 * Template Name: About
 *
 * This is the template used for
 * the about page at /about
 *
 * @package freak-child
 */

$aboutPagePost = new WP_Query([
  'post_type' => 'page',
  'post_name__in' => ['about'] // WordPress being annoying >_____>
]);

$biographyQuery = new WP_Query('post_type=intern_biography');

get_header();
?>

<div id="primary-mono" class="content-area <?php do_action('freak_primary-width') ?> page">
	<main id="main" class="site-main" role="main">

    <?php
      while ($aboutPagePost->have_posts()) {
        $aboutPagePost->the_post();
        get_template_part('content', 'page');

        echo "<pre>";
          var_dump($biographyQuery->get_posts());
        echo "</pre>";

        if ($biographyQuery->have_posts()) {
          while ($biographyQuery->have_posts()):
            $biographyQuery->the_post();
          ?>
            <section class="intern" style="background-image: url(<?= the_post_thumbnail_url() ?>)">
            </section> <!-- .intern -->
          <?php
          endwhile;
        }

        // If comments are open or we have at least
        // one comment, load up the comment template
				if (comments_open() || get_comments_number()) {
					comments_template();
        }
      }
    ?>
	</main> <!-- #main -->
</div> <!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
