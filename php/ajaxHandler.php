<?php
/**
 * Ajax Handler
 * 
 * -> include required ajax
 * -> create object 
 * -> let the class work
 * -> unset object
 * 
 */

//get Class
require_once 'GoogleFontsChecker.php';
//create object
$checker = new GoogleFontsChecker(file_get_contents('php://input'));
//Unset Object for better performance
unset($checker);
exit;