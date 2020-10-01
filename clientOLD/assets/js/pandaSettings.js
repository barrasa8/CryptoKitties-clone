var colors = Object.values(allColors())

//Local Storage
if (typeof(Storage) !== "undefined") {
  // Code for localStorage/sessionStorage.
  localStorage.setItem("defaultDNA","");
} else {
window.alert("Sorry, no local storage");
}

var defaultDNA = {
    "dnaarmleg" : 51,
    "dnaeyepatch" : 53,
    "dnainnerearfoot" : 54,
    "dnaheadbody" : 10,
    //Pandatributes
    "dnaeyeshape" : 1,
    "dnamouthshape" : 1,
    "decorationMidcolor" : 19,
    "decorationSidescolor" : 8,
    "animation" :  1,
    "lastNum" :  1
    }

  localStorage.setItem("defaultDna",JSON.stringify(defaultDNA))

// when page load
$( document ).ready(function() {
  $('#dnaarmleg').html(defaultDNA.dnaarmleg);
  $('#dnaeyepatch').html(defaultDNA.dnaeyepatch);
  $('#dnainnerearfoot').html(defaultDNA.dnainnerearfoot);
  $('#dnaheadbody').html(defaultDNA.dnaheadbody);
    
  $('#dnaeyeshape').html(defaultDNA.dnaeyeshape)
  $('#dnamouthshape').html(defaultDNA.dnamouthshape)
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
  $('#dnaanimation').html(defaultDNA.animation)
  $('#dnaspecial').html(defaultDNA.lastNum)

  renderPanda(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnaarmleg').html()
    dna += $('#dnaeyepatch').html()
    dna += $('#dnainnerearfoot').html()
    dna += $('#dnaheadbody').html()
    dna += $('#dnaeyeshape').html()
    dna += $('#dnamouthshape').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderPanda(dna){
    armLegsColor(colors[dna.dnaarmleg],dna.dnaarmleg)
    $('#armlegcolor').val(dna.dnaarmleg)
    eyePatchColor(colors[dna.dnaeyepatch],dna.dnaeyepatch)
    $('#eyepatchcolor').val(dna.dnaeyepatch)
    innerEarFootColor(colors[dna.dnainnerearfoot],dna.dnainnerearfoot)
    $('#innerearfootcolor').val(dna.dnainnerearfoot)
    headBodyColor(colors[dna.dnaheadbody],dna.dnaheadbody)
    $('#headbodycodecolor').val(dna.dnaheadbody)
    eyeShape(dna.dnaeyeshape)
    $('#eyeshape').val(dna.dnaeyeshape)
    mouthShape(dna.dnamouthshape)
    $('#mouthshape').val(dna.dnamouthshape) 
    decorationMidColor(colors[dna.decorationMidcolor],dna.decorationMidcolor)
    $('#middledecorationcolor').val(dna.decorationMidcolor)  
    decorationOutterColor(colors[dna.decorationSidescolor],dna.decorationSidescolor)
    $('#outterdecorationcolor').val(dna.decorationSidescolor) 
    animation(dna.animation)
    $('#animationnumber').val(dna.animation) 

}

// Changing Panda colors
$('#armlegcolor').change(()=>{
    var colorVal = $('#armlegcolor').val()
    armLegsColor(colors[colorVal],colorVal)
})

$('#eyepatchcolor').change(()=>{
  var colorVal = $('#eyepatchcolor').val()
  eyePatchColor(colors[colorVal],colorVal)
})

$('#innerearfootcolor').change(()=>{
  var colorVal = $('#innerearfootcolor').val()
  innerEarFootColor(colors[colorVal],colorVal)
})

$('#headbodycodecolor').change(()=>{
  var colorVal = $('#headbodycodecolor').val()
  headBodyColor(colors[colorVal],colorVal)
})

$('#eyeshape').change(()=>{
  var expression = parseInt($('#eyeshape').val())
  eyeShape(expression)
})

$('#mouthshape').change(()=>{
  var expression = parseInt($('#mouthshape').val())
  mouthShape(expression)
})

$('#middledecorationcolor').change(()=>{
  var colorVal = $('#middledecorationcolor').val()
  decorationMidColor(colors[colorVal],colorVal)
})

$('#outterdecorationcolor').change(()=>{
  var colorVal = $('#outterdecorationcolor').val()
  decorationOutterColor(colors[colorVal],colorVal)
})

$('#animationnumber').change(()=>{
  var animationNumber = parseInt($('#animationnumber').val())
  animation(animationNumber)
})

