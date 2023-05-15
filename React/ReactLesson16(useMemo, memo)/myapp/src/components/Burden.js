import {memo, useMemo } from "react"

let render = 0

export default memo(
    function Burden({counter2}){

        console.log(`Компонент Burden был обновлен ${++render} раз/раза`)
    
        // useMemo позволяет указать зависимость, по который будеть решаться, нужно ли 
        // возвращать новый return (выполнение всего тела функции) или нет. Сам результат в этом случае не будет функцией
    
        // useEffect позволяет выполнить тело (также как и useMemo), но результат работы (return) сохранить не сможет.
        // useEffect, в отличии от useMemo, вызывается сразу внутри компонента.
    
        // useCallback позволяет не переопделеять функцию в момент обновлении (указав зависиомости).
        // useCallback, в отличии от useMemo, возвращаеь функцию
    
        const burdenHandler = useMemo(() => {
            for(let i = 0; i < 1000000000; i++){
                let a = '123'
            }
            return (counter2 % 2 == 0) ? 'Значение четное' : 'Значение не четное'
        }, [counter2])
    
        
        return(
            <div>
               <p>{burdenHandler}</p>
            </div>
        )
    }, (oldProp, newProp) => newProp.counter2 > 5  // компонент будет обновляться только тогда, когда проп будет меньше 5

    // (oldProp, newProp) => {                     // дефолтное поведение memo()
    //     if (oldProp.counter2 === newProp.counter2){
    //         return true     // если будет TRUE, компонент не будет обновлен
    //     } else {
    //         return false    // если будет FALSE, компонент обновится
    //     }
    // }
    
) 

// export default memo(Burden)



