import { memo } from "react"


let render = {
    count1: 0,
    count2: 0
} 

function Counter(props){
    const {value, elem} = props

    console.log(`Компонет Counter (${elem}) был обновлен ${++render[elem]} раз/раза`)

    return(
        <div>
            <h2>{value}</h2>
        </div>
    )
}


export default memo(Counter)

// export default memo(Counter, (oldProp,newProp) => {
//     console.log(oldProp,newProp)
// })