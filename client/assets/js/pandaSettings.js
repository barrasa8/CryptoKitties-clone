
var colors = Object.values(allColors())

var defaultDNA = {
    "dnaarmleg" : 51,
    "dnaeyepatch" : 53,
    "dnainnerearfoot" : 54,
    "dnaheadbody" : 10,
    //Pandatributes
    "eyesShape" : 1,
    "decorationPattern" : 1,
    "decorationMidcolor" : 13,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnaarmleg').html(defaultDNA.dnaarmleg);
  $('#dnaeyepatch').html(defaultDNA.dnaeyepatch);
  $('#dnainnerearfoot').html(defaultDNA.dnainnerearfoot);
  $('#dnaheadbody').html(defaultDNA.dnaheadbody);
    
//   $('#dnashape').html(defaultDNA.eyesShape)
//   $('#dnadecoration').html(defaultDNA.decorationPattern)
//   $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
//   $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
//   $('#dnaanimation').html(defaultDNA.animation)
//   $('#dnaspecial').html(defaultDNA.lastNum)

  renderPanda(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnaarmleg').html()
    dna += $('#dnaeyepatch').html()
    dna += $('#dnainnerearfoot').html()
    dna += $('#dnaheadbody').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
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
