/**
 * Created by nmondon on 04/03/14.
 */

var parseXlsx = require('excel') // parseur xlsx
  , fs = require("fs") // file sys
  , xlsxName = "pop_2010"

// ouverture d'un fichier donné
parseXlsx('data/' +  xlsxName + '.xlsx', function(err, data) {
  if(err) throw err;

  var jsonHash = {};

  for(var indLine = 0; indLine < data.length; indLine = indLine+1){
    console.log(indLine);
    var line = data[indLine];
    jsonHash[ line[0] ] = parseInt(line[1]);
  }

  // enregistrement du fichier
  fs.writeFileSync('data/' + xlsxName + '.json', JSON.stringify(jsonHash));
});