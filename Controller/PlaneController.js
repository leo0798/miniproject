const {plane} =require('../models')


class PlaneController{
    static async listplane(req, res){
        try{
            let planes = await plane.findAll()

            res.json(planes)
        }catch(err){
            res.json(err)
        }

    }

    static async createplane(req, res){


    }

    static async create(req, res){
        try{
            const {name, schedule_id, aiport_id, route_id} = req.body

            res.json(planes)
        }catch(err){
            res.json(err)
        }
        
    }

}

module.exports = PlaneController