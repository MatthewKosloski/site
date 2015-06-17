<?php

    //Email Recipient
    /* Create Email Variables */
    $to = 'matthewkosloski@me.me';
    $name    = stripslashes(trim($_POST['name']));
    $email   = stripslashes(trim($_POST['email']));
    $subject = stripslashes(trim($_POST['subject']));
    $message = stripslashes(trim($_POST['message']));
    $ip = $_SERVER['REMOTE_ADDR']; 
    
    /* Create email body for applicant */
    $body = "From: " . $name . "<br />";
    $body .= "Email: " . $email . "<br />";
    $body .= "Subject: " . $subject . "<br />";
    $body .= "Message: " . $message . "<br />";
    $body .= "IP: " . $ip . "<br /><br />";
    
    /* Send information to email recipient */
    $headers = "From: $email\r\n";
    $headers .= "Content-type: text/html\r\n";
    mail($to,$subject,$body,$headers);
?>