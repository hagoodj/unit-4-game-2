
$(document).ready(function() {


    var player1hp;
    var player1attack;
    var newPlayerAttack;

    var enemy1HP;
    var enemy1Counter;

    var enemy2HP;
    var enemy2Counter;

    var enemy3HP;
    var enemy3Counter ;   

    var enemyHP;
    var enemyCounter;

    function reset () {

        player1hp = 0;
        player1attack = 0;
        newPlayerAttack = 0;
    
        enemy1HP = 0;
        enemy1Counter = 0;
    
        enemy2HP = 0;
        enemy2Counter = 0;
    
        enemy3HP = 0;
        enemy3Counter = 0;   
    
        enemyHP = 0;
        enemyCounter = 0;

        document.getElementById("button-1").disabled = false;
        $("#button-1").removeClass("disabled");
        document.getElementById("button-2").disabled = false;
        $("#button-2").removeClass("disabled");
        document.getElementById("button-3").disabled = false;
        $("#button-3").removeClass("disabled");
        document.getElementById("button-4").disabled = false;
        $("#button-4").removeClass("disabled");
        document.getElementById("button-5").disabled = false;
        $("#button-5").removeClass("disabled");
        document.getElementById("button-6").disabled = false;
        $("#button-6").removeClass("disabled");
        document.getElementById("button-7").disabled = false;
        $("#button-7").removeClass("disabled");

        $("#chosen-player").html('');
        $("#enemy1img").html('');
        $("#enemy2img").html('');
        $("#enemy3img").html('');
        $("#chosen-enemy").html('');
        $("#your-hp").html('');
        $("#attack-power").html('');
        $("#enemy-hp").html('');
        $("#counter-attack-power").html('');

    }

        $("#button-1").on("click", function() {

            $("#chosen-player").html('<img src = "./assets/images/player1.JPG" width = "100px" height = "100px"></img>');
            $("#enemy1img").html('<img src = "./assets/images/player2.JPG" width = "80px" height = "80px"></img>');
            $("#enemy2img").html('<img src = "./assets/images/player3.JPG" width = "80px" height = "80px"></img>');
            $("#enemy3img").html('<img src = "./assets/images/player4.JPG" width = "80px" height = "80px"></img>');

            document.getElementById("button-1").disabled = true;
            $("#button-1").addClass("disabled");
            document.getElementById("button-2").disabled = true;
            $("#button-2").addClass("disabled");
            document.getElementById("button-3").disabled = true;
            $("#button-3").addClass("disabled");
            document.getElementById("button-4").disabled = true;
            $("#button-4").addClass("disabled");

            player1hp = 100;
            player1attack = 20;
            newPlayerAttack = player1attack;

            enemy1HP = 110;
            enemy1Counter = 15;

            enemy2HP = 120;
            enemy2Counter = 10;

            enemy3HP = 130;
            enemy3Counter = 5;
            
            $("#your-hp").html("HP: " + player1hp);
            $("#attack-power").html("Attack Power: " + player1attack);

        })

        $("#button-2").on("click", function() {

            $("#chosen-player").html('<img src = "./assets/images/player2.JPG" width = "100px" height = "100px"></img>');
            $("#enemy1img").html('<img src = "./assets/images/player1.JPG" width = "80px" height = "80px"></img>');
            $("#enemy2img").html('<img src = "./assets/images/player3.JPG" width = "80px" height = "80px"></img>');
            $("#enemy3img").html('<img src = "./assets/images/player4.JPG" width = "80px" height = "80px"></img>');

            document.getElementById("button-1").disabled = true;
            $("#button-1").addClass("disabled");
            document.getElementById("button-2").disabled = true;
            $("#button-2").addClass("disabled");
            document.getElementById("button-3").disabled = true;
            $("#button-3").addClass("disabled");
            document.getElementById("button-4").disabled = true;
            $("#button-4").addClass("disabled");

            player1hp = 110;
            player1attack = 15;
            newPlayerAttack = player1attack;

            enemy1HP = 100;
            enemy1Counter = 20;

            enemy2HP = 120;
            enemy2Counter = 10;

            enemy3HP = 130;
            enemy3Counter = 5;

            $("#your-hp").html("HP: " + player1hp);
            $("#attack-power").html("Attack Power: " + player1attack);

        })

        $("#button-3").on("click", function() {

            $("#chosen-player").html('<img src = "./assets/images/player3.JPG" width = "100px" height = "100px"></img>');
            $("#enemy1img").html('<img src = "./assets/images/player1.JPG" width = "80px" height = "80px"></img>');
            $("#enemy2img").html('<img src = "./assets/images/player2.JPG" width = "80px" height = "80px"></img>');
            $("#enemy3img").html('<img src = "./assets/images/player4.JPG" width = "80px" height = "80px"></img>');

            document.getElementById("button-1").disabled = true;
            $("#button-1").addClass("disabled");
            document.getElementById("button-2").disabled = true;
            $("#button-2").addClass("disabled");
            document.getElementById("button-3").disabled = true;
            $("#button-3").addClass("disabled");
            document.getElementById("button-4").disabled = true;
            $("#button-4").addClass("disabled");

            player1hp = 120;
            player1attack = 10;
            newPlayerAttack = player1attack;

            enemy1HP = 100;
            enemy1Counter = 20;

            enemy2HP = 110;
            enemy2Counter = 15;

            enemy3HP = 130;
            enemy3Counter = 5;
            
            $("#your-hp").html("HP: " + player1hp);
            $("#attack-power").html("Attack Power: " + player1attack);

        })

        $("#button-4").on("click", function() {

            $("#chosen-player").html('<img src = "./assets/images/player4.JPG" width = "100px" height = "100px"></img>');
            $("#enemy1img").html('<img src = "./assets/images/player1.JPG" width = "80px" height = "80px"></img>');
            $("#enemy2img").html('<img src = "./assets/images/player2.JPG" width = "80px" height = "80px"></img>');
            $("#enemy3img").html('<img src = "./assets/images/player3.JPG" width = "80px" height = "80px"></img>');

            document.getElementById("button-1").disabled = true;
            $("#button-1").addClass("disabled");
            document.getElementById("button-2").disabled = true;
            $("#button-2").addClass("disabled");
            document.getElementById("button-3").disabled = true;
            $("#button-3").addClass("disabled");
            document.getElementById("button-4").disabled = true;
            $("#button-4").addClass("disabled");

            player1hp = 130;
            player1attack = 5;
            newPlayerAttack = player1attack;

            enemy1HP = 100;
            enemy1Counter = 20;

            enemy2HP = 110;
            enemy2Counter = 15;

            enemy3HP = 120;
            enemy3Counter = 10;
            
            $("#your-hp").html("HP: " + player1hp);
            $("#attack-power").html("Attack Power: " + player1attack);

        })

        $("#button-5").on("click", function() {

            if (player1attack === 20) {
                $("#chosen-enemy").html('<img src = "./assets/images/player2.JPG" width = "100px" height = "100px"></img>');
            }    

            if (player1attack !== 20) {
                $("#chosen-enemy").html('<img src = "./assets/images/player1.JPG" width = "100px" height = "100px"></img>');
            }

            document.getElementById("button-5").disabled = true;
            $("#button-5").addClass("disabled");
            document.getElementById("button-6").disabled = true;
            $("#button-6").addClass("disabled");
            document.getElementById("button-7").disabled = true;
            $("#button-7").addClass("disabled");

            enemyHP = enemy1HP;
            enemyCounter = enemy1Counter;

            $("#enemy-hp").html("HP: " + enemyHP);
            $("#counter-attack-power").html("Counter Attack Power: " + enemyCounter);

            document.getElementById("button-attack").disabled = false;

            $("#button-attack").off("click")
            $("#button-attack").on("click", function() {
                enemyHP = enemyHP - newPlayerAttack;
                $("#enemy-hp").html("HP: " + enemyHP);
                player1hp = player1hp - enemyCounter;
                $("#your-hp").html("HP: " + player1hp);
                newPlayerAttack = newPlayerAttack + player1attack;
                $("#attack-power").html("Attack Power: " + newPlayerAttack);
               
                if (player1hp <= 0) {
                    player1hp = 0;
                    $("#your-hp").html("HP: " + player1hp);
                    alert("Game Over");
                    reset();
                }
        
                if (enemyHP <= 0 && enemy2HP > 0 || enemyHP <= 0 && enemy3HP > 0) {
                    enemyHP = 0;
                    enemy1HP = 0;
                    $("#enemy-hp").html("HP: " + enemyHP);
                    alert("Choose Next Enemy")
                    document.getElementById("button-attack").disabled = true;
                }
    
                if (enemyHP <= 0 && enemy2HP !== 0) {
                    enemyHP = 0;
                    enemy1HP = 0;
                    $("#enemy-hp").html("HP: " + enemyHP);
                    document.getElementById("button-6").disabled = false;
                    $("#button-6").removeClass("disabled");
                }
    
                if (enemyHP <= 0 && enemy3HP !== 0) {
                    enemyHP = 0;
                    enemy1HP = 0;
                    $("#enemy-hp").html("HP: " + enemyHP);
                    document.getElementById("button-7").disabled = false;
                    $("#button-7").removeClass("disabled");
                }
    
                if (enemyHP <=0 && enemy2HP <= 0 && enemy3HP <= 0) {
                    enemyHP = 0;
                    enemy1HP = 0;
                    $("#enemy-hp").html("HP: " + enemyHP);
                    document.getElementById("button-5").disabled = true;
                    alert("Victory");
                    document.getElementById("button-attack").disabled = true;
                    reset();
                }

            })     

        })

        $("#button-6").on("click", function() {

            if (player1attack === 20 || player1attack === 15) {
                $("#chosen-enemy").html('<img src = "./assets/images/player3.JPG" width = "100px" height = "100px"></img>');
            }    

            if (player1attack === 10 || player1attack === 5) {
                $("#chosen-enemy").html('<img src = "./assets/images/player2.JPG" width = "100px" height = "100px"></img>');
            }

            document.getElementById("button-5").disabled = true;
            $("#button-5").addClass("disabled");
            document.getElementById("button-6").disabled = true;
            $("#button-6").addClass("disabled");
            document.getElementById("button-7").disabled = true;
            $("#button-7").addClass("disabled");

            enemyHP = enemy2HP;
            enemyCounter = enemy2Counter;

            $("#enemy-hp").html("HP: " + enemyHP);
            $("#counter-attack-power").html("Counter Attack Power: " + enemyCounter);

            document.getElementById("button-attack").disabled = false;
          
            $("#button-attack").off("click")
            $("#button-attack").on("click", function() {
                enemyHP = enemyHP - newPlayerAttack;
                $("#enemy-hp").html("HP: " + enemyHP);
                player1hp = player1hp - enemyCounter;
                $("#your-hp").html("HP: " + player1hp);
                newPlayerAttack = newPlayerAttack + player1attack;
                $("#attack-power").html("Attack Power: " + newPlayerAttack);
               
                if (player1hp <= 0) {
                    player1hp = 0;
                    $("#your-hp").html("HP: " + player1hp);
                    alert("Game Over");
                    reset();
                }
        
                if (enemyHP <= 0 && enemy1HP > 0 || enemyHP <= 0 && enemy3HP > 0) {
                    enemyHP = 0;
                    enemy2HP = 0;
                    $("#enemy-hp").html("HP: " + enemyHP);
                    alert("Choose Next Enemy")
                    document.getElementById("button-attack").disabled = true;
                }
    
                if (enemyHP <= 0 && enemy1HP !== 0) {
                    enemyHP = 0;
                    enemy2HP = 0;
                    $("#enemy-hp").html("HP: " + enemyHP);
                    document.getElementById("button-5").disabled = false;
                    $("#button-5").removeClass("disabled");
                }
    
                if (enemyHP <= 0 && enemy3HP !== 0) {
                    enemyHP = 0;
                    enemy2HP = 0;
                    $("#enemy-hp").html("HP: " + enemyHP);
                    document.getElementById("button-7").disabled = false;
                    $("#button-7").removeClass("disabled");
                }
    
                if (enemyHP <=0 && enemy1HP <= 0 && enemy3HP <= 0) {
                    enemyHP = 0;
                    enemy2HP = 0;
                    $("#enemy-hp").html("HP: " + enemyHP);
                    document.getElementById("button-6").disabled = true;
                    alert("Victory");
                    document.getElementById("button-attack").disabled = true;
                    reset();
                }    

            })    
            
        })

        $("#button-7").on("click", function() {

            if (player1attack === 5) {
                $("#chosen-enemy").html('<img src = "./assets/images/player3.JPG" width = "100px" height = "100px"></img>');
            }    

            if (player1attack !== 5) {
                $("#chosen-enemy").html('<img src = "./assets/images/player4.JPG" width = "100px" height = "100px"></img>');
            }

            document.getElementById("button-5").disabled = true;
            $("#button-5").addClass("disabled");
            document.getElementById("button-6").disabled = true;
            $("#button-6").addClass("disabled");
            document.getElementById("button-7").disabled = true;
            $("#button-7").addClass("disabled");

            enemyHP = enemy3HP;
            enemyCounter = enemy3Counter;
            
            $("#enemy-hp").html("HP: " + enemyHP);
            $("#counter-attack-power").html("Counter Attack Power: " + enemyCounter);

            document.getElementById("button-attack").disabled = false;
           
            $("#button-attack").off("click")
            $("#button-attack").on("click", function() {
                enemyHP = enemyHP - newPlayerAttack;
                $("#enemy-hp").html("HP: " + enemyHP);
                player1hp = player1hp - enemyCounter;
                $("#your-hp").html("HP: " + player1hp);
                newPlayerAttack = newPlayerAttack + player1attack;
                $("#attack-power").html("Attack Power: " + newPlayerAttack);
               
                if (player1hp <= 0) {
                    player1hp = 0;
                    $("#your-hp").html("HP: " + player1hp);
                    alert("Game Over");
                    reset();
                }
        
                if (enemyHP <= 0 && enemy1HP > 0 || enemyHP <= 0 && enemy2HP > 0) {
                    enemyHP = 0;
                    enemy3HP = 0;
                    $("#enemy-hp").html("HP: " + enemyHP);
                    enemy3HP = 0;
                    alert("Choose Next Enemy")
                    document.getElementById("button-attack").disabled = true;
                }
    
                if (enemyHP <= 0 && enemy1HP !== 0) {
                    enemyHP = 0;
                    enemy3HP = 0;
                    $("#enemy-hp").html("HP: " + enemyHP);
                    document.getElementById("button-5").disabled = false;
                    $("#button-5").removeClass("disabled");
                }
    
                if (enemyHP <= 0 && enemy2HP !== 0) {
                    enemyHP = 0;
                    enemy3HP = 0;
                    $("#enemy-hp").html("HP: " + enemyHP);
                    document.getElementById("button-6").disabled = false;
                    $("#button-6").removeClass("disabled");
                }
    
                if (enemyHP <=0 && enemy1HP <= 0 && enemy2HP <= 0) {
                    enemyHP = 0;
                    enemy3HP = 0;
                    $("#enemy-hp").html("HP: " + enemyHP);
                    document.getElementById("button-7").disabled = true;
                    alert("Victory");
                    document.getElementById("button-attack").disabled = true;
                    reset();
                }

            })

        })

  });