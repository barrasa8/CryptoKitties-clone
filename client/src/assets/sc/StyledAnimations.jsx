import { keyframes } from 'styled-components';


export const moveHead = keyframes`
    from{
        transform: rotate(-10deg);
    }
    to{
        transform: rotate(10deg);
    }
`
export const moveHeadLeftEar =  keyframes`
    from{
        margin-left: -16px;
        margin-top: 21px;
        transform: rotate(145deg);
    }
    to{
        margin-left: 14px;
        margin-top: -6px;
        transform: rotate(165deg);
    }
`
export const moveHeadRighttEar =  keyframes`
    from{
        margin-left: 77px;
        margin-top: -11px;
        transform: rotate(16deg);
    }
    to{
        margin-left: 113px;
        margin-top: 16px;
        transform: rotate(36deg);
    }
`
export const moveNose =  keyframes`
    from{
        margin-left:62px;
    }
    to{
        margin-left:66px;
    }
`
export const moveLeftFoot =  keyframes`
    from{
        transform: rotate(59deg);
    }
    to{
        transform: rotate(79deg);
    }
`
export const moveLeftToe1 =  keyframes`
    from{
        margin-left: 392px;
    }
    to{
        margin-left: 384px;
    }
`
export const moveLeftToe2 =  keyframes`
    from{
        margin-left: 381px;
    }
    to{
        margin-left: 374px;
    }
`
export const moveLeftToe3 =  keyframes`
    from{
        margin-left: 369px;
    }
    to{
        margin-left: 360px;
    }
`
export const moveLeftHeel =  keyframes`
    from{
        transform: rotate(-32deg);
    }
    to{
        transform: rotate(-12deg);
    }
`
export const moveRightFoot =  keyframes`
    from{
        transform: rotate(108deg);
    }
    to{
        transform: rotate(128deg);
    }
`
export const moveRightToe1 =  keyframes`
    from{
        margin-left: 85px;
        margin-top: 25px;
    }
    to{
        margin-left: 77px;
        margin-top: 19px;
    }
`

export const moveRightToe2 =  keyframes`
    from{
        margin-left: 95px;
    }
    to{
        margin-left: 87px;
        margin-top: 31px;
    }
`

export const moveRightToe3 =  keyframes`
    from{
        margin-left: 108px;
    }
    to{
        margin-left: 101px;
        margin-top: 34px;
    }
`
export const moveRightHeel =  keyframes`
    from{
        transform: rotate(9deg);
    }
    to{
        transform: rotate(29deg);
    }
`
export const headMove =  keyframes`
    animation: 2s moveHead infinite;
    animation-direction: alternate;
`

export const headLeftEarMove =  keyframes`
    animation: 2s moveHeadLeftEar infinite;
    animation-direction: alternate;
`

export const headRightEarMove =  keyframes`
    animation: 2s moveHeadRighttEar infinite;
    animation-direction: alternate;
` 
export const noseMove =  keyframes`
    animation: 1s moveNose infinite;
    animation-direction: alternate;
`
export const leftFootMove =  keyframes`
    animation: 2s moveLeftFoot infinite;
    animation-direction: alternate;
`
export const leftFootToe1Move =  keyframes`
    animation: 2s moveLeftToe1 infinite;
    animation-direction: alternate;
`
export const leftFootToe2Move =  keyframes`
    animation: 2s moveLeftToe2 infinite;
    animation-direction: alternate;
`
export const leftFootToe3Move =  keyframes`
    animation: 2s moveLeftToe3 infinite;
    animation-direction: alternate;
`
export const leftHeelMove =  keyframes`
    animation: 2s moveLeftHeel infinite;
    animation-direction: alternate;
`
export const rightFootMove =  keyframes`
    animation: 2s moveRightFoot infinite;
    animation-direction: alternate;
`
export const rightFootToe1Move =  keyframes`
    animation: 2s moveRightToe1 infinite;
    animation-direction: alternate;
`
export const rightFootToe2Move =  keyframes`
    animation: 2s moveRightToe2 infinite;
    animation-direction: alternate;
`
export const rightFootToe3Move =  keyframes`
    animation: 2s moveRightToe3 infinite;
    animation-direction: alternate;
    `
export const rightHeelMove =  keyframes`
    animation: 2s moveRightHeel infinite;
    animation-direction: alternate;
`