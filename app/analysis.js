// does the analysis on the DB

module.exports = function(callback){


  var User          = require('../app/models/user');

  var names = new Array();
  var sortDust = new Array();
  var sortKeep = new Array();
  var total_users;
  var total_dust = 0;
  var total_keep = 0;
  var max_dust = {"Max duster" : '', "dusts" : 0};
  var max_keep = {"Max keeper" : '', "keeps" : 0};
  var finalArray = new Array();

  User.find({}, function(err, user) {
            // if there are any errors, return the error
            //console.log(user);
            if (err)
                return callback(err);

            // check to see if theres already a user with that email
            else
                buildName(user);
                sumUsers(user);
                sumDusts(user);
                sumKeeps(user);
                maxDuster(user);
                maxKeeper(user);
                onDust(user);
                onKeep(user);
                buildFinal();
                return callback(finalArray);
            });


  function buildName(user){
    for (var i = 0; i < user.length; i++)
    {
      names.push(user[i].facebook.name);
    }
  }

  function sumUsers(user){
    total_users = user.length;
  }

  function buildFinal()
  {
    finalArray.push(names);
    finalArray.push({"Total Users" : total_users});
    finalArray.push({"Total Dusts" : total_dust});
    finalArray.push({"Total Keeps" : total_keep});
    finalArray.push(max_dust);
    finalArray.push(max_keep);
    finalArray.push(sortDust);
    finalArray.push(sortKeep);
  }

  function sumDusts(user)
  {
    for (var i = 0; i < user.length; i++)
    {
      total_dust += user[i].info.dusts;
    }
  }


  function sumKeeps(user)
  {
    for (var i = 0; i < user.length; i++)
    {
      total_keep += user[i].info.keeps;
    }
  }

  function maxDuster(user)
  {
    for (var i = 0; i < user.length; i++)
    {
      if (user[i].info.dusts > max_dust["dusts"])
      {
        max_dust["Max duster"] = user[i].facebook.name;
        max_dust["dusts"] = user[i].info.dusts;
      }

    }
  }


    function maxKeeper(user)
  {
    for (var i = 0; i < user.length; i++)
    {
      if (user[i].info.keeps > max_keep["keeps"])
      {
        max_keep["Max keeper"] = user[i].facebook.name;
        max_keep["keeps"] = user[i].info.keeps;
      }

    }
  }

  function onDust(user)
  {
      var temp = user.slice();
      console.log(temp[0].info);
      var notClean = new Array();

      for (var i = 0; i < user.length; i++)
      {
        var max = 0
        var index = 0
        for (var j = 0; j < temp.length; j++)
        {

            if (temp[j].info.dusts > max)
            {
                max = temp[j].info.dusts
                index = j;
            }

        
        }



        notClean.push(temp[index]);
        temp.splice(index,1);

        //console.log(offset);
        //console.log(user.length);

        


      }

      for (var i = 0; i < notClean.length;i++)
        {
          sortDust.push({"name":notClean[i].facebook.name,"dusts":notClean[i].info.dusts});
        }


      //console.log(sortDust);

  }

 function onKeep(user)
  {

          var temp = user.slice();
      console.log(temp[0].info);
      var notClean = new Array();

      for (var i = 0; i < user.length; i++)
      {
        var max = 0
        var index = 0
        for (var j = 0; j < temp.length; j++)
        {

            if (temp[j].info.keeps > max)
            {
                max = temp[j].info.keeps
                index = j;
            }

        
        }



        notClean.push(temp[index]);
        temp.splice(index,1);

        //console.log(offset);
        //console.log(user.length);

        


      }

      for (var i = 0; i < notClean.length;i++)
        {
          sortKeep.push({"name":notClean[i].facebook.name,"keeps":notClean[i].info.keeps});
        }

 





 }


}