<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Foodie_World
 */

get_header();

$enable_homepage_posts = foodie_world_enable_homepage_posts();

if ( $enable_homepage_posts ) : ?>
		<div id="primary" class="content-area">
			<main id="main" class="site-main">
				<div class="archive-content-wrap">
					<?php
					$post_title = get_theme_mod( 'foodie_world_recent_posts_heading', esc_html__( 'Recent Posts', 'foodie-world' ) );

					if ( '' !== $post_title ) :
					?>
						<div class="section-heading-wrapper">
							<div class="section-title-wrapper">
								<h2 class="section-title"><?php echo esc_html( $post_title ); ?></h2>
							</div>
						</div><!-- .section-heading-wrap -->
					<?php
					endif;
					?>

					<?php
					if ( have_posts() ) :

						if ( is_home() && ! is_front_page() ) : ?>
							<header>
								<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
							</header>

						<?php
						endif;
						?>
						<div class="section-content-wrapper">
							<div id="masonry-wrapper">
								<?php
								/* Start the Loop */
								while ( have_posts() ) : the_post();

									/*
									 * Include the Post-Format-specific template for the content.
									 * If you want to override this in a child theme, then include a file
									 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
									 */
									get_template_part( 'template-parts/content/content', get_post_format() );

								endwhile;
								?>
							</div><!-- #masonry-wrapper -->
						</div> <!-- .section-content-wrapper -->

						<?php
						foodie_world_content_nav();

					else :

						get_template_part( 'template-parts/content/content', 'none' );

					endif; ?>
				</div> <!-- .archive-content-wrap -->
			</main><!-- #main -->
		</div><!-- #primary -->
	<?php get_sidebar(); ?>
<?php endif; // $enable_homepage_posts
get_footer();
