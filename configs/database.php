<?php
if($_SERVER['HTTP_HOST']=='localhost' or $_SERVER['HTTP_HOST']=='localhost:8888' or preg_match('/^192.168./', $_SERVER['HTTP_HOST']) or preg_match('/^10.0./', $_SERVER['HTTP_HOST']) ){

	// define('DB_HOST', 'dbmy0016.whservidor.com');
	// define('DB_BASE', 'massadundu');
	// define('DB_USER', 'massadundu');
	// define('DB_PASS', 'dundun01');

} else {

	// define('DB_HOST', 'dbmy0016.whservidor.com');
	// define('DB_BASE', 'massadundu');
	// define('DB_USER', 'massadundu');
	// define('DB_PASS', 'dundun01');

}
	//define('_PREFIX_', '2013_');
	//define('PREFIX', '2013_');
?>
