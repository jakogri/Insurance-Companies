var http = require('http');
var express = require("express");
var app     = express();
var path    = require("path");
var fs = require("fs");
var HealthNet = require("./schemas/HealthNetSchema");
var Anthem = require("./schemas/AnthemSchema");
var BlueShield = require("./schemas/BlueShieldSchema");
var Kaiser = require("./schemas/KaiserSchema");
var Aetna = require("./schemas/AetnaSchema");
var bodyParser  =    require("body-parser");
require("node-pre-gyp");
app.use(bodyParser.urlencoded({ extended: false }));
var CarrierName = '';
var Plan = '';
var Path = '';
var User = '';
var ResultValue = [];
var ReturnCount = 1;

app.get('/', function (req, res)
{
    CarrierName = req.query.CarrierName;
    var str = '';
    Path = req.query.path;
    User = req.query.user;
    if (User == '')
        str = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><title></title></head><body><form method="POST" action=""><table border="0" cellspacing="0" cellpadding="0" width="100%"><caption style="font-weight:bold; font-size: 2em">Error - In an address line there is no user</caption></table><center><input type="button" style="font-weight:bold; font-size: 2em" onclick="history.back(-' + ReturnCount.toString() + ');" value="Ok"/></center></form></body></html>';
    else if (CarrierName == 'HealthNet')
        str = fs.readFileSync('./inputpages/HealthNet1.html', "utf-8") + 'Path: ' + Path + '; User: ' + User + fs.readFileSync('./InputPages/HealthNet2.html', "utf-8");
    else if (CarrierName == 'Anthem')
        str = fs.readFileSync('./inputpages/Anthem1.html', "utf-8") + ' Path: ' + Path + '; User: ' + User + fs.readFileSync('./InputPages/HealthNet2.html', "utf-8");
    else if (CarrierName == 'BlueShield')
        str = fs.readFileSync('./inputpages/BlueShield1.html', "utf-8") + ' Path: ' + Path + '; User: ' + User + fs.readFileSync('./InputPages/BlueShield2.html', "utf-8");
    else if (CarrierName == 'Kaiser')
        str = fs.readFileSync('./inputpages/Kaiser1.html', "utf-8") + '; Path: ' + Path + '; User: ' + User + fs.readFileSync('./InputPages/HealthNet2.html', "utf-8");
    else if (CarrierName == 'Aetna')
        str = fs.readFileSync('./inputpages/Aetna1.html', "utf-8") + 'Path: ' + Path + '; User: ' + User + fs.readFileSync('./InputPages/BlueShield2.html', "utf-8");
    else if (CarrierName == 'AetnaNormal')
    {
        ResultString = Aetna.SetAetnaNormal();
        str = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><title></title></head><body><form method="POST" action=""><table border="0" cellspacing="0" cellpadding="0" width="100%"><caption style="font-weight:bold; font-size: 2em">' + ResultString + '</caption></table><center><input type="button" style="font-weight:bold; font-size: 2em" onclick="history.back(-' + ReturnCount.toString() + ');" value="Ok"/></center></form></body></html>';
    }
    else if (CarrierName == 'AnthemNormal')
    {
        ResultString = Anthem.SetAnthemNormal();
        str = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><title></title></head><body><form method="POST" action=""><table border="0" cellspacing="0" cellpadding="0" width="100%"><caption style="font-weight:bold; font-size: 2em">' + ResultString + '</caption></table><center><input type="button" style="font-weight:bold; font-size: 2em" onclick="history.back(-' + ReturnCount.toString() + ');" value="Ok"/></center></form></body></html>';
    }
    else if (CarrierName == 'HealthNetNormal')
    {
        ResultString = HealthNet.SetHealthNetNormal();
        str = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><title></title></head><body><form method="POST" action=""><table border="0" cellspacing="0" cellpadding="0" width="100%"><caption style="font-weight:bold; font-size: 2em">' + ResultString + '</caption></table><center><input type="button" style="font-weight:bold; font-size: 2em" onclick="history.back(-' + ReturnCount.toString() + ');" value="Ok"/></center></form></body></html>';
    }
    else if (CarrierName == 'BlueShieldNormal')
    {
        ResultString = BlueShield.SetBlueShieldNormal();
        str = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><title></title></head><body><form method="POST" action=""><table border="0" cellspacing="0" cellpadding="0" width="100%"><caption style="font-weight:bold; font-size: 2em">' + ResultString + '</caption></table><center><input type="button" style="font-weight:bold; font-size: 2em" onclick="history.back(-' + ReturnCount.toString() + ');" value="Ok"/></center></form></body></html>';
    }
    else if (CarrierName == 'KaiserNormal')
    {
        ResultString = Kaiser.SetKaiserNormal();
        str = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><title></title></head><body><form method="POST" action=""><table border="0" cellspacing="0" cellpadding="0" width="100%"><caption style="font-weight:bold; font-size: 2em">' + ResultString + '</caption></table><center><input type="button" style="font-weight:bold; font-size: 2em" onclick="history.back(-' + ReturnCount.toString() + ');" value="Ok"/></center></form></body></html>';
    };
    res.send(str);
});

app.post('/save', function (req, res)
{
    var i = 0;
    var PathStr;
    var ResultString = ''; ;
    ResultValue[0] = User;
    ResultValue[1] = Path;
    ResultValue[2] = req.body.Plan;
    ReturnCount = ReturnCount + 1;
    while (i < parseInt(req.body.resultcount))
    {
        ResultValue[i + 3] = req.body["value" + i.toString()];
        i++;
    }
    if (ResultValue[2] == '')
    {
        ResultString = 'Error! The name of the plan is not entered!';
        ReturnCount = 1;
    }
    else if (CarrierName == 'HealthNet')
    {
        ResultString = HealthNet.DelHealthNet(ResultValue);
        if (ResultString == '')
            ResultString = HealthNet.SaveHealthNet(ResultValue);
    }
    else if (CarrierName == 'Anthem')
    {
        if (req.body.Network == '')
        {
            ResultString = 'Error! Network is not entered!';
            ReturnCount = 1;
        }
        else
        {
            ResultValue[i + 3] = req.body.Network;
            ResultString = Anthem.DelAnthem(ResultValue);
            if (ResultString == '')
                ResultString = Anthem.SaveAnthem(ResultValue);
        }
    }
    else if (CarrierName == 'Aetna')
    {
        if (req.body.Network == '')
        {
            ResultString = 'Error! Network is not entered!';
            ReturnCount = 1;
        }
        else
        {
            ResultValue[i + 3] = req.body.Network;
            ResultString = Aetna.SaveAetna(ResultValue);
            if (ResultString == '')
                ResultString = Aetna.SaveAetna(ResultValue);
            ReturnCount = 1;
        }
    }
    else if (CarrierName == 'BlueShield')
    {
        if (req.body.Network == '')
        {
            ResultString = 'Error! Network is not entered!';
            ReturnCount = 1;
        }
        else
        {
            ResultValue[i + 3] = req.body.Network;
            ResultString = BlueShield.DelBlueShield(ResultValue);
            if (ResultString == '')
                ResultString = BlueShield.SaveBlueShield(ResultValue);
        }
    }
    else if (CarrierName == 'Kaiser')
    {
        ResultString = Kaiser.DelKaiser(ResultValue);
        if (ResultString == '')
            ResultString = Kaiser.SaveKaiser(ResultValue);
    }
    res.send('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><title></title></head><body><form method="POST" action=""><table border="0" cellspacing="0" cellpadding="0" width="100%"><caption style="font-weight:bold; font-size: 2em">' + ResultString + '</caption></table><center><input type="button" style="font-weight:bold; font-size: 2em" onclick="history.back(-' + ReturnCount.toString() + ');" value="Ok"/></center></form></body></html>');
});

app.get('/clear', function (req, res)
{
   ReturnCount = ReturnCount + 1;
   if (CarrierName == 'HealthNet')
        str = fs.readFileSync('./inputpages/HealthNet1.html', "utf-8") + 'Path: ' + Path + '; User: ' + User + fs.readFileSync('./InputPages/HealthNet2.html', "utf-8");
    else if (CarrierName == 'Anthem')
        str = fs.readFileSync('./inputpages/Anthem1.html', "utf-8") + ' Path: ' + Path + '; User: ' + User + fs.readFileSync('./InputPages/HealthNet2.html', "utf-8");
    else if (CarrierName == 'BlueShield')
        str = fs.readFileSync('./inputpages/BlueShield1.html', "utf-8") + ' Path: ' + Path + '; User: ' + User + fs.readFileSync('./InputPages/BlueShield2.html', "utf-8");
    else if (CarrierName == 'Kaiser')
        str = fs.readFileSync('./inputpages/Kaiser1.html', "utf-8") + '; Path: ' + Path + '; User: ' + User + fs.readFileSync('./InputPages/HealthNet2.html', "utf-8");
    else if (CarrierName == 'Aetna')
        str = fs.readFileSync('./inputpages/Aetna1.html', "utf-8") + 'Path: ' + Path + '; User: ' + User + fs.readFileSync('./InputPages/BlueShield2.html', "utf-8");
   res.send(str);
});

app.listen(process.env.PORT || 3000,function(){
  console.log("Started on PORT 3000");
})



