
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.
function armLegsColor(color,code) {
    $('.a-left-leg,.a-right-leg,.a-left-foot,.a-right-foot,.a-left-arm,.a-right-arm,.a-arms')
    .css('background', '#' + color)  //This changes the color of the cat
    $('#armlegcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaarmleg').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function eyePatchColor(color,code) {
    $('.a-left-eye-patch,.a-right-eye-patch')
    .css('background', '#' + color)  //This changes the color of the cat
    $('#eyepatchcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaeyepatch').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function innerEarFootColor(color,code) {
    $('.a-left-inner-ear,.a-right-inner-ear,.a-left-toe-1,.a-left-toe-2,.a-left-toe-3,.a-left-heel,.a-right-toe-1,.a-right-toe-2,.a-right-toe-3,.a-right-heel,.a-nose')
    .css('background', '#' + color)  //This changes the color of the cat
    $('#innerearfootcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnainnerearfoot').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function headBodyColor(color,code) {
    $('.a-body,.a-head,.a-left-ear,.a-right-ear')
    .css('background', '#' + color)  //This changes the color of the cat
    $('#headbodycode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaheadbody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
//###################################################
//Functions below will be used later on in the project
//###################################################

function eyeShape(num) {
    $('#dnaeyeshape').html(num)
    switch (num) {
        case 1:
            normalEye()
            $('#eyeshapename').html('Normal')
            break
        case 2:
            shyEye()
            $('#eyeshapename').html('Shy')
            break
    }
}

function mouthShape(num) {
    $('#dnamouthshape').html(num)
    switch (num) {
        case 1:
            normalMouth()
            $('#mouthshapename').html('Normal')
            break
        case 2:
            happyMouth()
            $('#mouthshapename').html('Happy')
            break
        case 3:
            sadMouth()
            $('#mouthshapename').html('Sad')
            break  
        case 4:
            surpriseMouth()
            $('#mouthshapename').html('Surprise')
            break                        
    }
}

function normalEye() {
    $('#lEye,#lPupil,#rEye,#rPupil').removeClass()
    $('#lEye').addClass('a-left-eye')
    $('#lPupil').addClass('a-left-pupil , a-left-pupil-normal')
    $('#rEye').addClass('a-right-eye')
    $('#rPupil').addClass('a-right-pupil , a-right-pupil-normal')
}
function shyEye() {
    $('#lEye,#lPupil,#rEye,#rPupil').removeClass()
    $('#lEye').addClass('a-left-eye-shy a-left-eye')
    $('#lPupil').addClass('a-left-pupil a-left-pupil-shy')
    $('#rEye').addClass('a-right-eye-shy a-right-eye')
    $('#rPupil').addClass('a-right-pupil a-right-pupil-shy')
}
function normalMouth() {
    $('#mouth').removeClass()
    $('#mouth').addClass('a-mouth')
}
function happyMouth() {
    $('#mouth').removeClass()
    $('#mouth').addClass('a-mouth a-mouth-happy')
}
function sadMouth() {
    $('#mouth').removeClass()
    $('#mouth').addClass('a-mouth a-mouth-sad')
}
function surpriseMouth() {
    $('#mouth').removeClass()
    $('#mouth').addClass('a-mouth-surprise')
}

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}
