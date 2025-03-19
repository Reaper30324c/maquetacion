import './PrincipalContainer.css'
import RectangleBottom from "./RectangleBottom"
import RectangleRight from "./RectangleRight"
import RectangleTop from "./RectangleTop"
import ScuareLeft from "./ScuareLeft"

function PrincipalContainer(){
    return(<div className="horizon">

        <RectangleTop></RectangleTop>
        <RectangleTop></RectangleTop>

        <ScuareLeft></ScuareLeft>

        <RectangleRight></RectangleRight>
        <RectangleRight></RectangleRight>

        <RectangleBottom></RectangleBottom>
    </div>)
}
export default PrincipalContainer