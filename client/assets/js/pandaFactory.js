
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

//This function code needs to modified so that it works with Your animal code.
function armLegsColor(color,code) {
    $('.a-left-leg,.a-right-leg,.a-left-foot,.a-right-foot,.a-left-arm,.a-right-arm,.a-arms')
    .css('background', '#' + color)  //This changes the color of the animal
    $('#armlegcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaarmleg').html(code) //This updates the body color part of the DNA that is displayed below the animal
}
function eyePatchColor(color,code) {
    $('.a-left-eye-patch,.a-right-eye-patch')
    .css('background', '#' + color)  //This changes the color of the animal
    $('#eyepatchcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaeyepatch').html(code) //This updates the body color part of the DNA that is displayed below the animal
}
function innerEarFootColor(color,code) {
    $('.a-left-inner-ear,.a-right-inner-ear,.a-left-toe-1,.a-left-toe-2,.a-left-toe-3,.a-left-heel,.a-right-toe-1,.a-right-toe-2,.a-right-toe-3,.a-right-heel,.a-nose')
    .css('background', '#' + color)  //This changes the color of the animal
    $('#innerearfootcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnainnerearfoot').html(code) //This updates the body color part of the DNA that is displayed below the animal
}
function headBodyColor(color,code) {
    $('.a-body,.a-head,.a-left-ear,.a-right-ear')
    .css('background', '#' + color)  //This changes the color of the animal
    $('#headbodycode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnaheadbody').html(code) //This updates the body color part of the DNA that is displayed below the animal
}
function decorationMidColor(color,code){
    $('.a-ring-middle')
    .css('background', '#' + color)  //This changes the color of the animal
    $('#middledecorationcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnadecorationMid').html(code) //This updates the body color part of the DNA that is displayed below the animal
}
function decorationOutterColor(color,code){
    $('.a-ring-left,.a-ring-right')
    .css('background', '#' + color)  //This changes the color of the animal
    $('#outterdecorationcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnadecorationSides').html(code) //This updates the body color part of the DNA that is displayed below the animal
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
        case 3:
            rightThinkerEye()
            $('#eyeshapename').html('Right Thinker')
            break
        case 4:
            leftThinkerEye()
            $('#eyeshapename').html('Left Thinker')
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

function animation(num) {
    $('#dnaanimation').html(num)
    switch (num) {
        case 1:
            noMove()
            $('#animationname').html('Off')
            break
        case 2:
            noMove()
            moveHead()
            $('#animationname').html('Head')
            break                     
        case 3:
            noMove()
            moveNose()
            $('#animationname').html('Nose')
            break   
        case 4:
            noMove()
            moveLeftFoot()
            $('#animationname').html('Left Foot')
            break   
        case 5:
            noMove()
            moveRightFoot()
            $('#animationname').html('Right Foot')
            break  
        case 6:
            noMove()
            moveBothFeet()
            $('#animationname').html('Booth Feet')
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
function rightThinkerEye() {
    normalEye()
    $('#lPupil').addClass('a-left-pupil-thinker-right')
    $('#rPupil').addClass('a-right-pupil-thinker-right')
}
function leftThinkerEye() {
    normalEye()
    $('#lPupil').addClass('a-left-pupil-thinker-left')
    $('#rPupil').addClass('a-right-pupil-thinker-left')
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
function noMove(){
    $('#lEar').removeClass()
    $('#rEar').removeClass()
    $('#head').removeClass()
    $('#nose').removeClass()
    $('#lFoot').removeClass()
    $('#lFootToe1').removeClass()
    $('#lFootToe2').removeClass()
    $('#lFootToe3').removeClass()
    $('#lFootHeel').removeClass()
    $('#rFoot').removeClass()
    $('#rFootToe1').removeClass()
    $('#rFootToe2').removeClass()
    $('#rFootToe3').removeClass()
    $('#rFootHeel').removeClass()
    //Add initial classes
    $('#lEar').addClass("a-left-ear")
    $('#rEar').addClass("a-right-ear")
    $('#head').addClass("a-head")
    $('#nose').addClass("a-nose") 
    $('#lFoot').addClass("a-left-foot")
    $('#lFootToe1').addClass("a-left-toes a-left-toe-1")
    $('#lFootToe2').addClass("a-left-toes a-left-toe-2")
    $('#lFootToe3').addClass("a-left-toes a-left-toe-3")
    $('#lFootHeel').addClass("a-left-heel")
    $('#rFoot').addClass("a-right-foot")
    $('#rFootToe1').addClass("a-right-toes a-right-toe-1")
    $('#rFootToe2').addClass("a-right-toes a-right-toe-2")
    $('#rFootToe3').addClass("a-right-toes a-right-toe-3")
    $('#rFootHeel').addClass("a-right-heel")
}
function moveHead(){
    $('#lEar').addClass("headLeftEarMove")
    $('#rEar').addClass("headRightEarMove")
    $('#head').addClass("headMove")
}
function moveNose(){
    $('#nose').addClass("noseMove")
}
function moveLeftFoot(){
    $('#lFoot').addClass("leftFootMove")
    $('#lFootToe1').addClass("leftFootToe1Move")
    $('#lFootToe2').addClass("leftFootToe2Move")
    $('#lFootToe3').addClass("leftFootToe3Move")
    $('#lFootHeel').addClass("leftHeelMove")

}
function moveRightFoot(){
    $('#rFoot').addClass("rightFootMove")
    $('#rFootToe1').addClass("rightFootToe1Move")
    $('#rFootToe2').addClass("rightFootToe2Move")
    $('#rFootToe3').addClass("rightFootToe3Move")
    $('#rFootHeel').addClass("rightHeelMove")

}
function moveBothFeet(){
    moveLeftFoot()
    moveRightFoot()
}

