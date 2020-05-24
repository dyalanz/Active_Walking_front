<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mydb' );

/** MySQL database username */
define( 'DB_USER', 'admin' );

/** MySQL database password */
define( 'DB_PASSWORD', 'navigate' );

/** MySQL hostname */
define( 'DB_HOST', 'aw.cp3xto8b8gev.ap-southeast-2.rds.amazonaws.com' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '_2y#x=Q:F7,qqU&#;pUOPJ-G~%;m*2).p]nV[fD0-L5XP)5P|mzpueIG~M<sdns+' );
define( 'SECURE_AUTH_KEY',  'D6Kl+DcX$}mle_!19W~,5rH*5wso=b`j@&z={fPa`Q}^z5(TKs]<F DOU/I3A}w+' );
define( 'LOGGED_IN_KEY',    'yGw`>gdTBqum`dT$/kZ_p_ZzFXfFzhz$.to0 U/=`GO%<$~&WVev9RYA(kv!G3T2' );
define( 'NONCE_KEY',        'dXbI@y.,QnUXeK.@fuWg]sF7XE[B<fCN:a[4l9Gc3Hj6x]HT]h!^+Pr)n+pb7|Ql' );
define( 'AUTH_SALT',        'xh&kM?>?.*z_jL#0/XQoX3?3si^1K6P b[hDXC>aQR.XUE;b1Ky*2MUq 16$[cA,' );
define( 'SECURE_AUTH_SALT', 'laz]sig*]`]tWG59Z3@`,<XPAmM4:Tzq19)0fDo?h_S3U>Ghb`7xld))bxc/jsqj' );
define( 'LOGGED_IN_SALT',   '*1NQ%?E%#]FEKzxQ{8h`?<V^?}eQkx?cl@Igneq&SbWq<Qa;sm2#p}d69d1.[gqP' );
define( 'NONCE_SALT',       'N)~5WKh)Sje`3LA `Gy~SYKM28MczT3%p~fOA$U%JEtSCE8*@z$%joGx),<qPKVx' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
