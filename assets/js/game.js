
var playerName = "";

//menampilkan dialog nama
$("#simpanNama").click(function()
  {
    playerName = $("#inputName").val();
    console.log(playerName);
    play();
  }
);

function getSelection()
{
  var selection;

  $("#selection1").click(function()
  {
    selection = 1;
  });
  $("#selection2").click(function()
  {
    selection = 2;
  });

  return selection;
}

function play()
{

  //public/global variable
  var lowestDamage =  Math.round ( Math.random() * ( 10 - 5 ) + 5 );
  var highestDamage =  Math.round ( Math.random() * ( 30 - lowestDamage ) + lowestDamage ) ;


  //class untuk Monster
  class Monster
  {
    constructor(name, health)
    {
      this.name = name;
      this.health = 100;
    }

    setName(name)
    {
      this.name = name;
    }

    getName()
    {
      return name;
    }

    getHealth() {
      return this.health;
    }

     reduceHealth(damageValue)
    {
      this.health -= damageValue;

    }
     attack()
    {
      return (Math.random() * ( highestDamage - lowestDamage ) + lowestDamage);
    }

  }

  //class untuk player
  class Player{
    constructor(name, health)
    {
      this.name = "";
      this.health = 100;
    }

     setName(name) {
      this.name = name;
    }

     getName()
    {
      return name;
    }

     getHealth() {
      return this.health;
    }

     reduceHealth(damageValue)
    {
      this.health -= damageValue;
    }


     attack(skill = 0)
    {
      if (skill === 0)
      {
        return (Math.random() * ( highestDamage - lowestDamage ) + lowestDamage);
      }
      else
      {
        return ( Math.random() * ( 5 + ( highestDamage - lowestDamage ) + lowestDamage ) );
      }
    }
  }


  //Inisialisasi monster dan player, juga merupakan public variable

  var kutu = new Monster("Kutu Jahat");
  var ayam = new Monster("Ayam Ganas");
  var sapi = new Monster("Sapi Gila");
  var kuda = new Monster("Kuda Jingkrak");
  var gajah = new Monster("Gajah Mabuk");

  var monsters = [kutu, ayam, sapi, kuda, gajah];

  var player = new Player(playerName);

  var bermain = true;
  var turn = "player";



  while (bermain)
  {
    var damage = 0;
    var i = 0;
    var selection = 1;


    while (player.getHealth() > 0 || i < monsters.length)
    {

      if (i === ( monsters.length - 1 ))
        {
          alert("kamu menang");
          bermain = false;
          break;
        }
        else
        {
          if (monsters[i].getHealth() <= 0)
          {
            i++;
          }
            if (turn === "player")
            {
              console.log("giliran kamu ");
              if (selection === 1)
              {
                monsters[i].reduceHealth(player.attack());
                console.log( "sisa hp musuh : " + monsters[i].getHealth());
                turn = "monster";
              }
              else
              {
                monsters[i].reduceHealth(player.attack(2));
                console.log( "sisa hp musuh : " + monsters[i].getHealth());
                turn = "monster";
              }
            }
            else
            {
              console.log("giliran musuh ");
              player.reduceHealth(monsters[i].attack());
              console.log( "sisa hp kamu : " + player.getHealth());
              turn = "player";
            }
        }

    }

    if (player.getHealth() === 0)
    {
      alert("kamu kalah!");
      bermain = false;
    }
  }
}













// var monsters = ["kutuJahat", "ayamGanas", "sapiGila", "kudaJingkrak", "gajahMabuk"]
//
//
// //TAMPILKAN DIALOG NAMA
// var nama = "";
// var playerHealth = 100;
// var monsterHealth = 100;
// var lowestDamage =  Math.round ( Math.random() * ( 10 - 5 ) + 5 );
// var highestDamage =  Math.round ( Math.random() * ( 30 - "lowestDamage" ) + "lowestDamage" ) ;
//
//
// var bermain = true;
//
// while ( bermain )
// {
//   var turn = "player";
//   var damage = 0;
//   while (playerHealth > 0)
//   {
//     monsterHealth = 100;
//     while (var i < monsters.length)
//     {
//       if (turn === "player")
//       {
//         if (selection === 1)
//         {
//           damage = (Math.random() * ( "highestDamage" - "lowestDamage" ) + "lowestDamage");
//           monsterHealth -= damage;
//           turn = "monster";
//         }
//         else if (selection === 2)
//         {
//           damage = ( Math.random() * ( 5 + ( "highestDamage" - "lowestDamage" ) + "lowestDamage" ) );
//           monsterHealth -= damage;
//           turn = "monster";
//         }
//       }
//       else
//       {
//         damage = (Math.random() * ( "highestDamage" - "lowestDamage" ) + "lowestDamage");
//         playerHealth -= damage;
//         turn = "player"
//       }
//       if (playerHealth <= 0)
//       {
//         //GAME OVER
//       }
//     }
//   }
// }
