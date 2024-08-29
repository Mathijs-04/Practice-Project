<?php
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Secret</title>
</head>
<body>
<h1>Clash of Clans free gems generator</h1>
<form action="result.php" method="get">
    <div>
        <label for="username">Clash of Clans Username:</label>
        <input type="text" id="username" name="username" required>
    </div>
    <div>
        <label for="gems">Select Number of Gems:</label>
        <select id="gems" name="gems" required>
            <option value="100">100 Gems</option>
            <option value="1000">500 Gems</option>
            <option value="10000">1000 Gems</option>
            <option value="100000">5000 Gems</option>
        </select>
    </div>
    <div>
        <a href="fbi.php">Get Gems</a>
    </div>
</form>
</body>
</html>
