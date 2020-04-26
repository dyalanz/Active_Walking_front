module.exports = {
    queryHplace: "SELECT * FROM historical_building WHERE hist_id = ?;",
    queryNearbyhis: "SELECT *,( 6371 * acos( cos( radians(?) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(?) ) + sin( radians(?) ) * sin( radians( latitude ) ) ) ) AS distance FROM historical_building HAVING distance < ? ORDER BY distance LIMIT 0 , 9;",
    queryCertainsub:"SELECT * from historical_building where postal_code_ps_val in (select ps_val from postal_code where suburb_name = ?);"
    
}