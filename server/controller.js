module.exports ={
    getInventory: (req, res)=>{
        const db = req.app.get('db');
        db.get_inventory().then( dbres =>{
            res.status(200).send(dbres);
        }).catch(err=>{
            res.status(500).send({errormess:"SOMETHING WRONG"});
            console.log(err)
        })
    },
}