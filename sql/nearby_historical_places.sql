#this query to find the nearby locations based on the user location coordinates

set @startlat = -37.877010; #user latitude point
set @startlng = 145.044266; #user longitude point
set @dist = 10; #user selected radius value

SELECT *, ( 6371 * acos( cos( radians(@startlat) ) * cos( radians( latitude ) ) 
* cos( radians( longitude ) - radians(@startlng) ) + sin( radians(@startlat) ) 
* sin( radians( latitude ) ) ) ) AS distance 
FROM mydb.historical_building HAVING distance < @dist ORDER BY distance LIMIT 0 , 20;
