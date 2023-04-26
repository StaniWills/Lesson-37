import { forwardRef } from "react"

const Block2 = forwardRef((props, ref) => {
    return(
        <div ref={ref} style={{marginTop: '1000px', height: '100px', backgroundColor: 'blue'}}>
            Block2
        </div>
    )
})


export default Block2