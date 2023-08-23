module.exports = {
    index (req,res){
        res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด ')
    },

    creat (req,res){
        res.send('ทำหารสร้างผู้ใช้งาน: ' +JSON.stringify(req.body))
    },

    put(req,res){
        res.send('ทำการแก้ไขผู้ใช้งาน: ' + req.params.userID + ' : ' + JSON.stringify(req.body))
    },

    remove (req,res){
        res.send('ทำการลบผู้ใช้งาน: ' + req.params.userID + ' : ' + JSON.stringify(req.body))
    },

    show(req,res){
        res.send('ดูข้อมูลผู้ใช้งาน: ' + req.params.userID)
    }
}