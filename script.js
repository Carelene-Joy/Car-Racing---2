var canvas=document.getElementById ('mycanvas')
var context=canvas.getContext ("2d")
var carwidth=100
var carheight=90
var carimage="car1.png"
var carx=10
var cary=10

var car2width=100
var car2height=90
var car2image="car1.png"
var car2x=10
var car2y=150
var bgimage,carbg,car2bg
var backgroundimage="canvas.jpg"
function add()  {
     bgimage=new Image() 
    bgimage.onload=uploadbg()
    bgimage.src=backgroundimage

     carbg=new Image()
    carbg.onload=uploadcarbg()
    carbg.src=carimage

    car2bg=new Image()
    car2bg.onload=uploadcar2bg()
    car2bg.src=car2image
}

function uploadbg  () {
    context.drawImage(bgimage,0,0,canvas.width,canvas.height)
}
function uploadcarbg () {
context.drawImage(carbg,carx,cary,carwidth,carheight)
}

function uploadcar2bg () {
    context.drawImage(car2bg,car2x,car2y,car2width,car2height)
    }
window.addEventListener("keydown",kd)
function kd (e)    {
    var keypress=e.keyCode
    if (keypress=="38") {
        up()

    }
    if (keypress=="40") {
        down()
        
    }
    if (keypress=="37") {
        left()
        
    }
    if (keypress=="39") {
        right()
        
    }

     
    if (keypress=="87") {
        up2()

    }
    if (keypress=="83") {
        down2()
        
    }
    if (keypress=="65") {
        left2()
        
    }
    if (keypress=="68") {
        right2()
        
    }

    if (carx>700) {
        document.getElementById ("Gamestatus").innerHTML="Car 1 has Won!"
    }
    else if (car2x>700)  {
        document.getElementById ("Gamestatus").innerHTML="Car 2 has Won!"
    }
    
}

function up () {
    if (cary>=0)  {
        cary=cary-10
        uploadbg()
        uploadcarbg()
        uploadcar2bg()
    
        
    }
        }
    
        function down () {
            if (cary<=500)  {
                cary=cary+10
                uploadbg()
                uploadcarbg()
                uploadcar2bg()
                
                
            }
                }
    
                function left () {
                    if (carx>=0)  {
                        carx=carx-10
                        uploadbg()
                        uploadcarbg()
                        uploadcar2bg()
                        
                    }
                        }
    
                        function right () {
                            if (carx<=700)  {
                                carx=carx+10
                                uploadbg()
                                uploadcarbg()
                                uploadcar2bg()
                                
                                
                            }
                                }

                                function up2 () {
                                    if (car2y>=0)  {
                                        car2y=car2y-10
                                        uploadbg()
                                        uploadcarbg()
                                        uploadcar2bg()
                                       
                                    
                                        
                                    }
                                        }
                                    
                                        function down2 () {
                                            if (car2y<=500)  {
                                                car2y=car2y+10
                                                uploadbg()
                                                uploadcarbg()
                                                uploadcar2bg()
                                                
                                                
                                                
                                            }
                                                }
                                    
                                                function left2 () {
                                                    if (car2x>=0)  {
                                                        car2x=car2x-10
                                                        uploadbg()
                                                        uploadcarbg()
                                                        uploadcar2bg()
                                                        
                                                        
                                                    }
                                                        }
                                    
                                                        function right2 () {
                                                            if (car2x<=700)  {
                                                                car2x=car2x+10
                                                                uploadbg()
                                                                
                                                                uploadcarbg()
                                                                uploadcar2bg()
                                                                
                                                                
                                                                
                                                            }
                                                                }