$.getScript("http://code.jquery.com/jquery-1.7.2.min.js");

setInterval(() => {
  const paragraphs = document.querySelectorAll('div');
 
  paragraphs.forEach(paragraph => {

    if (paragraph.textContent.includes('L:10')) {
      paragraph.classList.add('moh');
    }
 $("#users .uzr.moh span.uhash,.active.moh fl.ustat,#users .uzr.moh img.co,#users .uzr.moh .ustat,.fl.mini.u-co").hide(); 


});
}, 11000);

    
$("style").last().append(` 
#users .uzr.moh .fitimg.u-pic { 
  border-radius: 4px 4px 4px 4px!important; 
   margin-left: 8px!important;
  margin-top: 6px!important;
  height: 57px!important;
   perspective: 500px!important;
     ransform-style: preserve-3d!important;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2),
              -2px -2px 4px rgba(255,255,255,0.4)!important;
   margin: 0 auto;
border-bottom:2px solid;
     margin-bottom:2px;
     border-top:2px solid;
     margin-top:2px;
     border-color:#bababa
} 
#users .uzr.moh .mini.u-msg {
    width: 170px!important;
    font-size: 14px!important;
    text-align: right!important;
    margin-top: 3px!important;
  background-image: url('https://www.babup.com/do.php?img=91354');
  background-size: 170px 40px!important;
    background-repeat: no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
        }

#users .uzr.moh { 
     background-image: url('https://www.babup.com/do.php?img=91356'); 
     box-shadow: 2px 2px 4px rgba(188,188,188,0.2),
              -2px -2px 4px rgba(255,255,255,0.3)!important;
     border-bottom:2px solid;
     margin-bottom:2px;
     border-top:2px solid;
     margin-top:2px;
     border-color:#D6D6D6
     background-repeat: no-repeat; 
     background-size: cover; 
     background-position: center;
     height: 73px!important;
     border-radius: 5px!important;
} 
#users .uzr.moh .u-topic { 
  margin-left: 5px; 
} 
 
`);
