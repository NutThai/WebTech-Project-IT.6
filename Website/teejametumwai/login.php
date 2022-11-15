<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <link rel="stylesheet" href="style_bar.css">
    <link rel="stylesheet" href="style_detail_main.css">
    <link rel="stylesheet" href="body.css">
    <title>Document</title>
</head>

<body>
    <style>
        body{
            display: flex;
            flex: 1;
          
        }
        form {
            margin: 10px;
        }
        .left{
            width: 50%;
            position: absolute;
            height: 100%;

        }
        .right{
            width: 50%;
            padding-top: 200px;
            background-color: var(--ci2);
            height: 100%;
            position: absolute;
            right: 0;
            color: white;
            
        }
        img{
            height: 100%;
        }
        .nameweb{
            text-align: center;
            margin-bottom: 100px;
        }
        h1{
            font-size: 100px;
            font-weight: bold;
            line-height: 80px;
            letter-spacing: 10px;
        }
        .container{
            padding: 0px 50px;
          
        }

    </style>

    <body>
        <div class="left"><img src="img/p1.jpg" alt=""></div>
        <div class="right">
            <div class="nameweb">
                <h1>STUN</h1>
                <h5>Taste of godbless!</h5>
            </div>

            <div class="container">
                <form method="POST">
                    <!-- <h2>Login</h2> -->
                    <label>Username:</label>
                    <input type="text" name="Username" required><br><br>
                    <label>Password:</label>
                    <input type="password" name="Password" required><br><br>
                    <input type="submit" name="SUBMIT" value="Login" class="btn btn-dark"><br>
                    <p>Not a member? <a href="register.php">Sign Up</a> here.</p>
                </form>
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
            // $sql =<<<EOF
            // CREATE TABLE USER
            // (FIRST_NAME           TEXT    NOT NULL,
            // LAST_NAME           TEXT    NOT NULL,
            // USERNAME           TEXT    PRIMARY KEY    NOT NULL,
            // PASSWORD           TEXT    NOT NULL,
            // ADDRESS        CHAR(100)    NOT NULL);
            // EOF;
            // $ret = $db->exec($sql);
            if (isset($_POST['SUBMIT'])) {
                $Username = htmlentities($_POST['Username']);
                $Password = htmlentities($_POST['Password']);
                $sql = "SELECT * from USER WHERE USERNAME = '$Username' AND PASSWORD = '$Password'" ;
                $ret = $db->query($sql);
                $ad = $db->query("SELECT * from USER ");
                while ($row = $ret->fetchArray(SQLITE3_ASSOC)) {
                    echo '<script type="text/javascript">';
                    echo "localStorage.setItem('Username', '" . $Username . "')";
                    echo '</script>';
                    $sql = "SELECT * from USER WHERE USERNAME = '$Username'";
                    $ret = $db->query($sql);
                    while($row = $ret->fetchArray(SQLITE3_ASSOC) ) {
                        echo '<script type="text/javascript">';
                        echo  "localStorage.setItem('Address', '" . $row['ADDRESS'] . "')";
                        echo 'window.location="main.html"';
                        echo '</script>';
                        }
                }

                echo '<script type="text/javascript">alert("wrong Username or Password.")</script>';
            }
                

            $db->close();

            ?>
        </div>

    </body>

</html>