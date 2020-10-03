import { allColors } from '../js/colors';
import styled from 'styled-components'
import { moveHead, moveHeadLeftEar, moveHeadRighttEar, moveNose
,moveLeftFoot,moveLeftToe1,moveLeftToe2,moveLeftToe3
,moveLeftHeel,moveRightFoot,moveRightToe1,moveRightToe2,moveRightToe3
,moveRightHeel} from './StyledAnimations';

/*
set of available colors
*/
const colors = Object.values(allColors());

/**
 * Style of Panda
 */
export const StyledPanda = styled.div`

/**********************************************************
color variables
*********************************************************/
/* colors[props.dna.headColor] */

.a-left-leg,.a-right-leg,.a-left-foot,.a-right-foot,.a-left-arm,.a-right-arm,.a-arms{
    background: #${props => colors[props.dna.dnaarmleg-10]}
}
.a-left-eye-patch,.a-right-eye-patch{
    background: #${props => colors[props.dna.dnaeyepatch-10]}
}
.a-left-inner-ear,.a-right-inner-ear,.a-left-toe-1,.a-left-toe-2,.a-left-toe-3,.a-left-heel,.a-right-toe-1,.a-right-toe-2,.a-right-toe-3,.a-right-heel,.a-nose{
    background: #${props => colors[props.dna.dnainnerearfoot-10]}
}
.a-body,.a-head,.a-left-ear,.a-right-ear{
    background: #${props => colors[props.dna.dnaheadbody-10]}
}
.a-ring-middle{
    background: #${props => colors[props.dna.decorationMidcolor-10]}
}
.a-ring-left,.a-ring-right{
    background: #${props => colors[props.dna.decorationSidescolor-10]}
}


.a-container{
  
    justify-content: center;
    align-content: center;
    display: flex;
}
.a-head{
    width: 150px;
    height: 135px;
    border-radius: 50%;
    margin-top: 50px;
    border: 2px ;
    z-index: 6;
} 
.a-eyes{
    display: flex;
    margin-top: 40px;
    position: relative;
}
.a-left-eye-patch{
    width: 35px;
    height: 35px;
    margin-left:27px;
    border-radius: 80% 43% 80% 43%;
    transform: rotate(-20deg);
}
.a-right-eye-patch{
    width: 35px;
    height: 35px;
    margin-left:27px;
    border-radius: 80% 43% 80% 43%;
    transform: rotate(110deg);
}
.a-left-eye{
    background-color: white;
    width: 13px;
    height: 13px;
    margin-top: 12px;
    margin-left: 16px;
    border-radius: 50%;
}
.a-right-eye{
    background-color: white;
    width: 13px;
    height: 13px;
    margin-top: 16px;
    margin-left: 13px;
    border-radius: 50%;
    transform: rotate(90deg);
}
.a-left-pupil{
    background-color: black;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    position: absolute;
}
.a-right-pupil{
    background-color: black;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    transform: rotate(90deg);
    position: absolute;
}
.a-left-pupil-spark{
    background-color: white;
    width: 3px;
    height: 3px;
    margin-top: 2px;
    margin-left: 3px;
    border-radius: 50%;
    position: absolute;
}
.a-right-pupil-spark{
    background-color: white;
    width: 3px;
    height: 3px;
    margin-left: 1px;
    margin-top: 1px;
    border-radius: 50%;
    transform: rotate(90deg);
    position: absolute;
}
.a-nose{
    width: 20px;
    height: 14px;
    margin-left: 64px;
    border-radius: 50%;
}
.a-mouth{
    border: 3px solid black;
    width: 36px;
    height: 18px;
    margin-top: 4px;
    margin-left: 55px;
    border-radius: 50%;
    border-top: 0;
    border-top-left-radius: 2px;
    border-top-right-radius: 1px;
}
.a-ears{
    display: flex;
    margin-top: 38px;
    position: relative;
    z-index: 1;
}
.a-left-ear{
    width: 51px;
    height: 43px;
    margin-left: 3px;
    border-radius: 138% 157% 149% 181%;
    transform: rotate(155deg);
    position: absolute;
    
}
.a-right-ear{
    width: 51px;
    height: 43px;
    margin-left: 100px;
    border-radius: 196% 197% 200% 184%;
    transform: rotate(26deg);
    position: absolute;
}
.a-left-inner-ear{
    width: 31px;
    height: 26px;
    margin-left: 9px;
    margin-top: 6px;
    border-radius: 138% 157% 149% 181%;
    transform: rotate(155deg);
    position: absolute;
    z-index: 1;
}
.a-right-inner-ear{
    width: 31px;
    height: 23px;
    margin-left: 9px;
    margin-top: 13px;
    border-radius: 196% 197% 200% 184%;
    transform: rotate(26deg);
    position: absolute;
    z-index: 1;
}
.a-body{
    width: 198px;
    height: 209px;
    border-radius: 50%;
    margin-top: 150px;
    border: 2px ;/*solid black; */
    z-index: 4;
    position: absolute;
}
.a-arms{
    width: 190px;
    height: 67px;
    border-radius: 50%;
    border-top-left-radius: 500px;
    border-top-right-radius: 500px;
    border-top: 0;
    margin-top: 160px;
    border: 2px ;
    z-index: 5;
    position: absolute;
}
.a-left-arm{
    width: 60px;
    height: 95px;
    border-radius: 50%;
    margin-top: 40px;
    margin-left: 4px;
    position: absolute;
    transform: rotate(-27deg);
}
.a-right-arm{
    width: 60px;
    height: 95px;
    border-radius: 50%;
    margin-top: 40px;
    margin-left: 128px;
    transform: rotate(22deg);
    position: absolute;
}
.a-rings{
    width: 60px;
    height: 60px;
    margin-top: 111px;
    margin-left: 68px;
    display: flex;
    justify-content: center;
}
.a-ring-left{
    width: 23px;
    height: 23px;
    border-radius: 50%;
    border: 2px solid black;
    position: absolute;
    margin-top: 11px;
    margin-left: 60px;
}
.a-ring-middle{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid black;
    position: absolute;
    margin-top: 15px;
    margin-left: 82px;
}
.a-ring-right{
    width: 23px;
    height: 23px;
    border-radius: 50%;
    border: 2px solid black;
    position: absolute;
    margin-top: 11px;
    margin-left: 106px;
}

.a-legs{
    width: 480px;
    height: 66px;
    margin-top: 250px;
    position: absolute;
    transform: rotate(180deg);
    z-index: 3;
}
.a-left-leg{
    width: 131px;
    height: 67px;
    border-radius: 50% 30% 50% 30%;
    margin-left: 239px;
    margin-top: -51px;
    position: absolute;
    transform: rotate(182deg);
}
.a-right-leg{
    width: 131px;
    height: 67px;
    border-radius: 50% 30% 50% 30%;
    margin-left: 92px;
    margin-top: -51px;
    position: absolute;
    transform: rotate(6deg);
}
.a-left-foot{
    width: 101px;
    height: 60px;
    border-radius: 50% 30% 50% 30%;
    margin-left: 313px;
    margin-top: -34px;
    position: absolute;
    transform: rotate(69deg);
}
.a-right-foot{
    width: 101px;
    height: 60px;
    border-radius: 50% 30% 50% 30%;
    margin-left: 60px;
    margin-top: -29px;
    position: absolute;
    transform: rotate(118deg);
}
.a-left-toes{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
}
.a-left-toe-1{
    margin-left: 388px;
    margin-top: 17px;
}
.a-left-toe-2{
    margin-left: 377px;
    margin-top: 24px;
}
.a-left-toe-3{
    margin-left: 364px;
    margin-top: 26px;
}
.a-left-heel{
    width: 30px;
    height: 37px;
    border-radius: 50%;
    position: absolute;
    margin-left: 350px;
    margin-top: -30px;
    transform: rotate(-22deg);
}
.a-right-toes{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
}
.a-right-toe-1{
    margin-left: 80px;
    margin-top: 25px;
}
.a-right-toe-2{
    margin-left: 91px;
    margin-top: 32px;
}
.a-right-toe-3{
    margin-left: 104px;
    margin-top: 35px;
}
.a-right-heel{
    width: 30px;
    height: 37px;
    border-radius: 50%;
    position: absolute;
    margin-left: 97px;
    margin-top: -30px;
    transform: rotate(19deg);
}

.a-bamboos{
    position: absolute;
    z-index: 2;
}
.a-bamboo-stick{
    background: green;
    width: 12px;
    height: 299px;
    position: absolute;
}
.a-bamboo-stick-1{
    margin-left: -162px;
    margin-top: 29px;
    width: 12px;
    height: 326px;
}
.a-bamboo-stick-2{
    margin-left: -140px;
    margin-top: 56px;
    width: 12px;
    height: 299px;
}
.a-bamboo-stick-3{
    margin-left: -118px;
    margin-top: 35px;
    width: 12px;
    height: 299px;
}
.a-bamboo-divider{
    background: black;
    height: 10px;
    width: 12px;
    margin-top: 41px;
}



/*Eye Shape*/
.a-left-pupil-normal{
    margin-top: 5px;
    margin-left: 6px;
}
.a-right-pupil-normal{
    margin-top: 1px;
    margin-left: 6px;
}
/* Eye shy*/
.a-left-pupil-shy{
    margin-left: 0px;
    margin-top: 0px;
}
.a-right-pupil-shy{
    margin-top: 0px;
    margin-left: 4px;
}
.a-right-eye-shy{
    border-bottom: 6px black solid;
}
.a-left-eye-shy{
    border-top: 6px black solid;
}
/*Eye thinker*/
.a-left-pupil-thinker-right{
    margin-top: 1px;
    margin-left: 6px;
}
.a-right-pupil-thinker-right{
    margin-top: 6px;
    margin-left: 1px;
}
.a-right-pupil-thinker-left{
    margin-top: 4px;
    margin-left: 6px;
}
.a-left-pupil-thinker-left{
    margin-top: 0px;
    margin-left: 1px;
}
/*Mouth shape*/
/*Sad*/
.a-mouth-sad{
    transform: rotate(180deg);
}
/*Surprise*/
.a-mouth-happy{
    height: 35px;
}
.a-mouth-surprise{
    border: 3px solid black;
    width: 27px;
    height: 33px;
    margin-top: 4px;
    margin-left: 59px;
    border-radius: 50%;
}
/*Animations*/
.headMove{
    animation: 2s ${moveHead} infinite;
    animation-direction: alternate;
}
.headLeftEarMove{
    animation: 2s ${moveHeadLeftEar} infinite;
    animation-direction: alternate;
}
.headRightEarMove{
    animation: 2s ${moveHeadRighttEar} infinite;
    animation-direction: alternate;
}
.noseMove{
    animation: 1s ${moveNose} infinite;
    animation-direction: alternate;
}
.leftFootMove{
    animation: 2s ${moveLeftFoot} infinite;
    animation-direction: alternate;
}
.leftFootToe1Move{
    animation: 2s ${moveLeftToe1} infinite;
    animation-direction: alternate;
}
.leftFootToe2Move{
    animation: 2s ${moveLeftToe2} infinite;
    animation-direction: alternate;
}
.leftFootToe3Move{
    animation: 2s ${moveLeftToe3} infinite;
    animation-direction: alternate;
}
.leftHeelMove{
    animation: 2s ${moveLeftHeel} infinite;
    animation-direction: alternate;
}
.rightFootMove{
    animation: 2s ${moveRightFoot} infinite;
    animation-direction: alternate;
}
.rightFootToe1Move{
    animation: 2s ${moveRightToe1} infinite;
    animation-direction: alternate;
}
.rightFootToe2Move{
    animation: 2s ${moveRightToe2} infinite;
    animation-direction: alternate;
}
.rightFootToe3Move{
    animation: 2s ${moveRightToe3} infinite;
    animation-direction: alternate;
}
.rightHeelMove{
    animation: 2s ${moveRightHeel} infinite;
    animation-direction: alternate;
}

`