import { allColors } from '../js/colors';
import styled from 'styled-components'


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



`