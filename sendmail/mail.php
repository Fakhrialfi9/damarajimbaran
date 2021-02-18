<?php
    $to = "sales@damarajimbaran.com";
    $subject = $_POST['subject'];
    $header = "From:" .$_POST['email']. "\r\n";
    // $header .= "Cc:sales@damarajimbaran.com \r\n";
    $header .= "MIME-Version: 1.0" . "\r\n";
    $header .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    $message = "<html><body>
    <p>(<i>This e-mail was sent from website</i>)</p>
    <table rules='all' style='width: 80%; border-color: #666;' cellpadding='10'>
    <tr style='background: #eee;'><td style='width=\"20%\"'><b>Subject: </b></td><td style='width=\"70%\"'>".$_POST['subject']."</td></tr>
    <tr><td><b>Name: </b></td><td>".$_POST['name']."</td></tr>
    <tr><td><b>Email: </b></td><td>".$_POST['email']."</td></tr>
    <tr><td><b>Message: </b></td><td>".$_POST['message']."</td></tr>
    </table>
    </html></body>";
    
    $sendmail = mail ($to,$subject,$message,$header);
    
    if( $sendmail == true ) {
       header('Location: ' . $_SERVER['HTTP_REFERER']);
    }else {
       header('Location: ' . $_SERVER['HTTP_REFERER']);
    }
?>