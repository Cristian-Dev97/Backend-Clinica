const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from medicos',(err,medicos) =>{
            if(err){
                res.json(err);
            }
            res.json(medicos);
        });

    });

};

controller.edit = (req, res) => {

    const {coddoctor}= req.params;

    req.getConnection((err,conn) =>{
        conn.query('select *from medicos where coddoctor = ?', [coddoctor], (err,medicos) => {
            res.json(medicos[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into medicos SET ?', [data], (err,medicos) => {
        res.json(medicos);
       });
   })
};

controller.update = (req,res) =>{

    const {coddoctor}= req.params;
    const nuevo_doctor = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update medicos SET ? where coddoctor =?', [nuevo_doctor, coddoctor], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {coddoctor}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('UPDATE medicos SET estado = "INACTIVO" WHERE coddoctor = ?', [coddoctor], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports =controller;