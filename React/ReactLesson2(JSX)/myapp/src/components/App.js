
// 1) Правило JSX: внутри разметки необходимо указать {} для того, чтобы учесть JS ВЫРАЖЕНИЕ

// function App(){
//     const string = 'Tigran'
//     let a = 100
//     return(
//         <div className={(a < 50) ? 'true' : 'false'}>
//             {`name ${string} ${(10 == 10) ? 10 : 0}`}
//         </div>
//     )
// }

// export default App

// ----------------------------

// 2) Правило: в любом месте можно перейти из JS в HTML и обратно
//      для перехода из HTML в JS необходимо указать {} (1 правило)
//      для перехода из JS в HTML ничего указывать не нужно

function App(){

    const a = 100

    return(
        <div>
            <div>
                {(a === 100) ? <p>{a}</p> : <h1>Заголовок</h1>}
            </div>
            <div>
                {(a === 10) && <p>a = 100</p>}
            </div>
        </div>
    )
}

export default App