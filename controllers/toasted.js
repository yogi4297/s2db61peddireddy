/*
var toasted = require('../models/toasted');
// List of all toasted items
exports.toasted_list = function(req, res) {
 res.send('NOT IMPLEMENTED: toasted list');
};

*/
var toasted = require('../models/toasted');
// List of all bakerys
exports.toasted_list = async function(req, res) {
    try{
        thetoasted = await toasted.find();
        res.send(thetoasted);
    }
    catch(err){
        res.error(500,`{"error": ${err}}`);
    }
    
};

// for a specific toasted item.
exports.toasted_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await toasted.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };



// Handle Costume create on POST.
exports.toasted_create_post = async function(req, res) {
 console.log(req.body)
 let document = new toasted();
 // We are looking for a body, since POST does not have query parameters.
 // Even though bodies can be in many different formats, we will be picky
 // and require that it be a json object
 // {"costume_type":"goat", "cost":12, "size":"large"}
 document.toasted_type = req.body.toasted_type;
 document.price = req.body.price;
 document.Quantity = req.body.Quantity;
 try{
 let result = await document.save();
 res.send(result);
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 }
};


// Handle Costume delete form on DELETE.

exports.toasted_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await toasted.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };


// Handle Costume update form on PUT.


exports.toasted_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await toasted.findById( req.params.id)
 // Do updates of properties
 if(req.body.toasted_type)
 toUpdate.toasted_type = req.body.toasted_type;
 if(req.body.cost) toUpdate.price = req.body.price;
 if(req.body.size) toUpdate.Quantity = req.body.Quantity;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};


// List of all Costumes
exports.toasted_list = async function(req, res) {
    try{
    thetoasted = await toasted.find();
    res.send(thetoasted);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // VIEWS
// Handle a show all view
exports.toasted_view_all_Page = async function(req, res) {
    try{
    thetoasted = await toasted.find();
    res.render('toasted', { title: 'toasted Search Results', results: thetoasted });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// Handle a show one view with id specified by query
exports.toasted_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await toasted.findById( req.query.id)
        res.render('toasteddetail', { title: 'toasted Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};





exports.toasted_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('toastedcreate', { title: 'toasted Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{"error": Error creating ${err}}`); 
    }
};




exports.toasted_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await toasted.findById(req.query.id)
    res.render('toastedupdate', { title: 'toasted Update', toShow: result });
    }
    catch(err){
    res.status(500)
    //res.send(`{'error': '${err}'}`);
    }
   };



// Handle a delete one view with id from query
exports.toasted_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await toasted.findById(req.query.id)
        res.render('toasteddelete', { title: 'toasted Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};