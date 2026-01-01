<?php

/**
 * Fired during plugin activation
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Xophz_Compass_Enchiridion
 * @subpackage Xophz_Compass_Enchiridion/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Xophz_Compass_Enchiridion
 * @subpackage Xophz_Compass_Enchiridion/includes
 * @author     Your Name <email@example.com>
 */
class Xophz_Compass_Enchiridion_Activator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
	    if ( !is_plugin_active( 'xophz-compass/plugin.php' ) ) {  
	    	die('This plugin requires COMPASS to be active.</a></div>');
	    } 
	}

}
