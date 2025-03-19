import './PrincipalContainer.css'
import RectangleBottom from "./RectangleBottom"
import RectangleRight from "./RectangleRight"
import RectangleTop from "./RectangleTop"
import RectangleTopDos from './RectangleTopDos'
import ScuareLeft from "./ScuareLeft"

function PrincipalContainer(){
    return(<div className="horizon">

        <RectangleTop></RectangleTop>
        <RectangleTopDos></RectangleTopDos>

        <ScuareLeft></ScuareLeft>

        <RectangleRight></RectangleRight>
        <RectangleRight></RectangleRight>

        <RectangleBottom></RectangleBottom>
    </div>)
}
export default PrincipalContainer