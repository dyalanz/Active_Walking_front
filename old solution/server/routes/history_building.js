var express = require('express');
var router = express.Router();
let result = require("../util/result.js")

let { query,query1 } = require("../dao/Hisb/Hisb_dao.js"); // database operating


/* GET users listing. */
router.get('/', function(req, res, next) { // 
  res.render('history_building', { title: 'history_buildingApi', 
        apiList:[
            {
                url:"history_building/queryHplace",
                method:"GET",
                params:{
                    id:"ID"
                },
                result:{
                    "success": true,
                    "data":`{
                      hist_id: 1,
                      latitude:"latitude", 
                      longitude:"longitude",
                      name:"name",
                      image_url:"image_url",
                      description:"description",
                      address:"address",
                      summary:"summary"
                    }`
                }
            },
          {
             url:"history_building/queryNearbyhis ",
             method:"GET",
             params:{
              lat:"Lat",
              lng:"Lng",
              dist:"Dist"
             },
            result:{
              "success": true,
              "data":`{
                hist_id: 1,
                latitude:"latitude", 
                longitude:"longitude",
                name:"name",
                image_url:"image_url",
                description:"description",
                address:"address",
                summary:"summary"
              }`
            }

          } 
          
          
          ]
    });;
});


// PALCE INFO GET REQUEST
router.get('/queryHplace', function(req, res, next) {
  let urlParam = {
    id: req.query.id
  };
  console.log(urlParam);
  query(urlParam,function(success){
    let r =  result.createResult(true, success);
    res.json(r);
  })
});
 
router.get('/queryNearbyhis/:lat/:lng/:dist',function(req,res,next){
  let urlParam={
    lat: req.params.lat,
    lng: req.params.lng,
    dist: req.params.dist
  };
  console.log(urlParam);
  query1(urlParam,function(success){
    let r =  result.createResult(true, success);
    res.json(r);
    })
  });



module.exports = router;

