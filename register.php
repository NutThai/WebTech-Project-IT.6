<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    <title>STUN Taste of Godbless!</title>
    <link rel="stylesheet" href="style_bar.css">
    <link rel="stylesheet" href="style_detail_main.css">
    <link rel="stylesheet" href="body.css">
</head>
<style>
    body {
            display: flex;
            flex: 1;

        }

        form {
            margin: 10px;
        }

        .left {
            width: 50%;
            position: absolute;
            height: 100%;

        }

        .right {
            width: 50%;
            padding-top: 200px;
            background-color: rgb(22, 22, 22);
            height: 100%;
            position: absolute;
            right: 0;
            color: white;

        }

        img {
            height: 100%;
        }

        .nameweb {
            text-align: center;
            margin-bottom: 100px;
        }

        h1 {
            font-size: 100px;
            font-weight: bold;
            line-height: 80px;
            letter-spacing: 10px;
        }

        .container {
            width: 700px;
            padding: 30px;
            border: solid white 2px;
            border-radius: 10px;
            margin-top: -50px;
            
        }
        label{
            margin-left: 10px;
        }
        .btn{
            font-weight:bold;
            width: 100%;
            margin: auto;
            border-radius: 50px;
        }
        input{
            background-color: transparent;
            border: solid white 1px;
            border-radius: 50px;
            margin-left: 10px;
            color: white;
        }

        textarea{
            background-color: transparent;
            border: solid white 1px;
            border-radius: 10px;
            margin-left: 10px;
            color: white;
            max-height: 120px;
            width: 500px;
        }
    </style>

    <body>
        <div class="left"><img src="img/ad1.jpg" alt=""></div>
        <div class="right">
            <div class="nameweb">
                <h1>STUN</h1>
                <h5>Taste of godbless!</h5>
            </div>

            <div class="container">
            <form method="POST">
                <!-- <h2>Register</h2> -->
                <label>First Name:</label>
                <input type="text" name="First_Name" required>
                <label>Last Name:</label>
                <input type="text" name="Last_Name" required><br><br>
                <label>Username:</label>
                <input type="text" name="Username" required><br><br>
                <label>Phone:</label>
                <input type="text" name="Phone" required><br><br>
                <label>Password</label>
                <input type="password" name="Password" required><br><br>
                <label>Confirm Password:</label>
                <input type="password" name="confirmPassword" required><br><br>
                <label>Address:</label>
                <textarea rows="3" cols="30" name="Address" required></textarea><br><br>
                <input type="submit" name="SUBMIT" value="Submit" class="btn btn-light">
                <br><br>
                <p>Already a member? <a href="login.php">Sign In</a></p>
            </form>
        </div>
    </div>
     <?php


    class MyDB extends SQLite3
    {
        function __construct()
        {
            $this->open('user.db');
        }
    }
    $db = new MyDB();

    if (isset($_POST['SUBMIT'])) {
        $First_Name = htmlentities($_POST['First_Name']);
        $Last_Name = htmlentities($_POST['Last_Name']);
        $Username = htmlentities($_POST['Username']);
        $Password = htmlentities($_POST['Password']);
        $confirmPassword = htmlentities($_POST['confirmPassword']);
        $Address = htmlentities($_POST['Address']);
        $Phone = htmlentities($_POST['Phone']);
        $sql = "SELECT * from USER WHERE USERNAME = '$Username'";
        $ret = $db->query($sql);
        $row = $ret->fetchArray(SQLITE3_ASSOC);
        if($row > 0){
            echo '<script type="text/javascript">';
            echo 'alert("This Username already exited.")';  
            echo '</script>';
            
            }
        else if ($Password != $confirmPassword) {
            echo '<script type="text/javascript">';
            echo 'alert("Password dose not match!")';
            echo '</script>';
        } else {
            $sql = <<<EOF
                    INSERT INTO USER(FIRST_NAME,LAST_NAME,USERNAME,PASSWORD,ADDRESS,PHONE)
                    VALUES ('$First_Name', '$Last_Name','$Username', '$Password' ,'$Address','$Phone');
                EOF;
            header('location: login.php');
            $ret = $db->exec($sql);
        }
    }

    // Close database
    $db->close();


    ?> 

</body>

</html>