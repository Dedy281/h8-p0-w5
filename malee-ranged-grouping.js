function meleeRangedGrouping (str) {
  var potongKoma = str.split(',');   
  var hero = [];
  var result = []

  for(var i = 0; i < potongKoma.length; i++) {
    hero.push(potongKoma[i].split('-'));
  }

  var ranged = [];
  var malee = [];
  
  for (var j = 0; j < hero.length; j++) {
    if(hero[j][1] == 'Ranged') {
      ranged.push(hero[j][0]);
    } else {
      malee.push(hero[j][0]);
    }
  }
  result.push(ranged,malee);
  
  return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []