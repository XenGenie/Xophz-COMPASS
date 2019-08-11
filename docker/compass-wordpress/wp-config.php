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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'wordpress' );

/** MySQL database password */
define( 'DB_PASSWORD', 'wordpress' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
define( 'WP_MEMORY_LIMIT', '256M' );
// define( 'WP_HOME','http://localhost');
// define( 'WP_SITEURL','http://10.0.0.184:3000');
/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'LRC<Bkr*V0iKgfM#h93<<gtooMI2|[~iS+RQ5pc%YZ_M} mI;_As1+}is+9yqYpL' );
define( 'SECURE_AUTH_KEY',  '!HF7TF+Z l^@I:,(:p`$AtO-/,]4XT}u_X(Jze3.0zUQ@J!nS)i4o^5rPY!cXw-1' );
define( 'LOGGED_IN_KEY',    'M}^usYAaOeXk,SO$0`)BuIJEpYS:5R/`vzrky7is,(&rcs|xbr=VGdt2l.G kL~h' );
define( 'NONCE_KEY',        '#:a]e $cJwzlSnsClE<y4kHjyN~Z= Lv!&(fNU1^tBu;Bg}y_9fPG LaE(P$Re_k' );
define( 'AUTH_SALT',        'iJPb4?EI]e!?l.%B_hQC_$ ]WjCk+~Lec]P(oOfM?O<Y=cN*)N9gu0/Y`v!yrq:k' );
define( 'SECURE_AUTH_SALT', 'oi}R<,Y]?MI~@N[3gm=cyM0rYBQl-Nde;($H+BmzJoHJRq4gN??J{~x<dHF8p@hw' );
define( 'LOGGED_IN_SALT',   '83Zh8cm}C8eVl*5+xpCA-nOz]+=TAw_vZ=V`dmLN&%a,xf>dMj?({j(%M?Ci1+Xu' );
define( 'NONCE_SALT',       'CVtYL+,D%}KmuiRay[LkyW(cy?rTf1pEZlH.s2|.KOxp#~0e<p4D.^O/s^Spt4Gg' );

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
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'COMPASS_DEV', 'Test', true);
define( 'WP_DEBUG', false );
define( 'WP_ALLOW_MULTISITE', true );
// define('MULTISITE', true);
// define('SUBDOMAIN_INSTALL', false);
// define('DOMAIN_CURRENT_SITE', 'localhost');
// define('PATH_CURRENT_SITE', '/');
// define('SITE_ID_CURRENT_SITE', 1);
// define('BLOG_ID_CURRENT_SITE', 1);
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
