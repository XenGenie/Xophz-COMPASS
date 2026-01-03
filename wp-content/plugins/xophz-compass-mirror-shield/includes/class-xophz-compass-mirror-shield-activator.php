<?php

/**
 * Fired during plugin activation
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Xophz_Compass_Mirror_Shield
 * @subpackage Xophz_Compass_Mirror_Shield/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Xophz_Compass_Mirror_Shield
 * @subpackage Xophz_Compass_Mirror_Shield/includes
 * @author     Your Name <email@example.com>
 */
class Xophz_Compass_Mirror_Shield_Activator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
	    if ( !is_plugin_active( 'xophz-compass/xophz-compass.php' ) ) {  
	    	die('This plugin requires COMPASS to be active.</a></div>');
	    } 
	}

}
