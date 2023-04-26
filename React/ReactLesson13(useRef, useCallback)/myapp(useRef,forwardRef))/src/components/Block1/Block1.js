import { forwardRef } from "react"

// forwardRef - функция, которая позволяет получить отдельно пропы и передаваемый реф

const Block1 = forwardRef((props, ref) => {
    return(
        <div ref={ref} style={{marginTop: '1000px', height: '100px', backgroundColor: 'green'}}>
            Block1
        </div>
    )
})


export default Block1