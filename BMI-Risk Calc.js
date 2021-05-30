var obj, i, x, y, bmi, result = "",  risk;
   obj = [];

const fs = require('fs');

// read JSON object from file
fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }

    // parse JSON object
    obj = JSON.parse(data.toString());

for (i = 0; i < obj.length; i++) {
  
  x = obj[i].HeightCm;
  y = obj[i].WeightKg;
  var m = x / 100;
  bmi = (y / m).toFixed(2);
  CalculateBMI(bmi);
  obj[i].BMI = bmi;
  obj[i].Risk = risk;
}
console.log(obj);
});


function CalculateBMI(bmiVal) {
  switch (true) {
    case (bmi < 18.4):
      risk = "Malnutrition risk";
      break;
    case (bmiVal >= 18.5 && bmiVal <= 24.9):
      risk = "low risk";
      break;
    case (bmiVal >= 25 && bmiVal <= 29.9):
      risk = "enhanced risk";
      break;
    case (bmiVal >= 30 && bmiVal <= 34.9):
      risk = "medium risk";
      break;
    case (bmiVal >= 35 && bmiVal <= 39.9):
      risk = "high risk";
      break;
    case (bmiVal >= 40):
      risk = "Very high risk";
      break;
  }
  return risk;
}




