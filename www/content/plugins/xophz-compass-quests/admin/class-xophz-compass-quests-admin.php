<?php
  use LinxHUD\Compass\Plugin as Xophz_Compass;

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Xophz_Compass_Quests
 * @subpackage Xophz_Compass_Quests/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Xophz_Compass_Quests
 * @subpackage Xophz_Compass_Quests/admin
 * @author     Your Name <email@example.com>
 */
class Xophz_Compass_Quests_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Xophz_Compass_Quests_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Xophz_Compass_Quests_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/xophz-compass-quests-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Xophz_Compass_Quests_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Xophz_Compass_Quests_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/xophz-compass-quests-admin.js', array( 'jquery' ), $this->version, false );

	}


	/**
	 * Add menu item 
	 *
	 * @since    1.0.0
	 */
	public function addToMenu(){
        Xophz_Compass::add_submenu($this->plugin_name);
	}

  public function getAllPeople(){

    $args = Xophz_Compass::get_input_json();
    $args->count_total = true; 
    $args->number= 5; 
    $user_search = new WP_User_Query( $args );
    $users = (array) $user_search->get_results();
    $count_total = $user_search->get_total();

    Xophz_Compass::output_json([
      'count_total' => $count_total,
      'people' => $users
    ]);
  }

  /**
   * undocumented function
   *
   * @return void
   */
  public function peoplePrimaryInformation()
  {
    global $wp_crm;
    $user_role = WP_CRM_F::get_first_value( !empty($user_object['role'])?$user_object['role']:array() );
    Xophz_Compass::output_json([
      'data_structure' => $wp_crm['data_structure']['attributes'] 
    ]);
  }
}
