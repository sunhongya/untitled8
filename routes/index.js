var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs=require('fs');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//xhr get请求测试页面
router.get('/httprequest', function(req, res, next) {
  res.render('httprequest', { title: 'test httprequest' });
});

//formdata 测试页面
router.get('/formdata', function(req, res, next) {
  res.render('formdata', { title: 'Express' });
});


//上传下载进度测试页面
router.get('/uploaddownload', function(req, res, next) {
  res.render('uploaddownload', { title: 'Express' });
});


//window.name 测试页面
router.get('/crossname', function(req, res, next) {
  res.render('crossname', { title: 'Express' });
});
//xhr cors测试页面
router.get('/cross', function(req, res, next) {
  res.render('cross', { title: 'Express' });
});
//img ping测试页面
router.get('/imgping', function(req, res, next) {
  res.render('imgping', { title: 'Express' });
});
//jsonp测试页面
router.get('/jsonp', function(req, res, next) {
  res.render('jsonp', { title: 'Express' });
});
router.get('/script', function(req, res, next) {
  res.render('script', { title: 'Express' });
});



/*上传文件*/
router.post('/upload',function(req,res,next){
  var form = new formidable.IncomingForm();
  form.uploadDir='./public/upload/';
  form.keepExtensions = true;
  form.parse(req,function(err,fields,files){
    console.log(fields);

    var file=files.file;
    var newPath = '/upload/'+  new Date().getTime()+ file.name.substring(file.name.lastIndexOf('.'));
    fs.renameSync(file.path,'./public'+ newPath);
    fields.file=newPath;
    res.contentType('json');
    res.send(fields);
    res.end();
  })
})




/*提交数据*/
router.post('/form',function(req,res,next){
  console.log(req.body);
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {

    res.contentType('json');
    res.send(fields);
    res.end();
  });
})


module.exports = router;
