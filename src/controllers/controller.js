var dbConn = require('./../../config/db.config');


exports.viewAll = (req, res) => {
    
        dbConn.query("Select * from employees", (err, results) => {
        if(err) {
            return console.error(err.message);
        }
          console.log(results);
          res.status(200).json({
              success: true,
              message: "Successfully",
              data: results,
          });
        
        });
     
    };

    
    exports.create = (req, res) => {
    // let doc ={first_name : req.body.first_name, last_name : req.body.last_name, email: req.body.email, phone: req.body.phone, organization: req.body.organization, designation: req.body.designation};
    
    // let sql = "INSERT INTO employee set ?";

     let doc ={name:req.body.name, email:req.body.email, password:req.body.password};
     let sql = "INSERT INTO user set ?";
    dbConn.query(sql, doc,  (err, results) => {
        if(err) 
        {
            return console.log(err.message);
        }
       
        else{
            res.status(200).json({
                success: true,
                messsage: "Successsfully Add data",
                data: doc

            });
        }

    });

    };


    exports.findById = (req, res) => {
        let sql = "SELECT * FROM employees WHERE id=" + req.params.id;
        dbConn.query(sql, (err, results) => {
          if (err) return console.log(err.message);
          else
            res.status(200).json({
              success: true,
              message: "seccess",
              data: results,
            });
        });
      };
      
      //update
      
      exports.updateById = (req, res) => {
        let sql =
          "UPDATE user SET name='" +
          req.body.name +
          "', email='" +
          req.body.email +
          "' WHERE id=" +
          req.params.id;
        dbConn.query(sql, (err, results) => {
          if (err) console.log(err);
          else
            res.status(200).json({
              success: true,
              message: "success",
              data: results,
            });
        });
      };

      //Delete

      exports.delete = (req, res) => {
        let sql = "DELETE FROM employees WHERE id=" + req.params.id;
        dbConn.query(sql, (err, results) => {
          if (err) return console.log(err.message);
          else
            res.status(200).json({
              success: true,
              message: "success",
              data: results,
            });
        });
      };
      
  



