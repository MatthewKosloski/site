<?php

    //Email Recipient
    /* Create Email Variables */
    $to = 'hi@mtk.me';
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $age = $_POST['age'];
    $robot = $_POST['robot'];
    $ip = $_SERVER['REMOTE_ADDR']; 
    
    /* Create email body for applicant */
    $body = "From: " . $name . "<br />";
    $body .= "Email: " . $email . "<br />";
    $body .= "Subject: " . $subject . "<br />";
    $body .= "Age: " . $age . "<br />";
    $body .= "Robot?: " . $robot . "<br />";
    $body .= "Message: " . $message . "<br />";
    $body .= "IP: " . $ip . "<br /><br />";
    
    /* Send information to email recipient */
    $headers = "From: $email\r\n";
    $headers .= "Content-type: text/html\r\n";
    mail($to,$subject,$body,$headers);
    
    header("location: ../index.html");
    
?>