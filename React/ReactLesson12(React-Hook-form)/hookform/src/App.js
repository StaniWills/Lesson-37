import {useForm} from 'react-hook-form'

// офф. документация: 
// https://react-hook-form.com/api/useform/

function App() {
  // register регистрирует каждый input для инициализации стейта в форме (useForm)
  // handlesubmit - функция, которая обрабатывает данные всех зарегистрированных input'ов (данные и валдация)
  // formState - данные о каждом зарегистрированном input поля
  // reset - функция, которая при отправке формы очищает данные с инпутов
  let {
    register,
    handleSubmit,
    formState: {errors},
    reset
  } = useForm({mode: 'onSubmit'})
  // mode позволяет указать режим работы валидации 

  // Функция, которая берет в работу данные после успешной проверки валидации
  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  const firstnameInp = register('firstname', {
    // Обязательное поле
    required: 'Имя обязательно к заполнению',
    // Максимальная допустимая длина
    maxLength: {
      value: 5,
      message: 'Длина имени превышена (макс. 5 символов)'
    }
  })

  const lastnameInp = register('lastname', {
    required: 'Фамилия обязательна к заполнению',
    minLength: {
      value: 3,
      message: 'Для фамилии должна быть минимум 3 символа'
    }
  })

  const loginInp = register('login', {
    required: 'Поле не заполнено',
    pattern: {
      value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,3}$/,
      message: 'Почта задана неверно'
    }
  })

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label>
            Имя:
            <input 
            placeholder='Введите имя'
            {...firstnameInp}
            />
          </label>
        </div>
        
        {/* Элемент, который отображет возможную ошибку при отправке формы */}
        {errors.firstname && <p style={{color: 'red'}}>{errors.firstname.message}</p>}

        <div>
          <label>
            Фамилия:
            <input 
            placeholder='Введите фамилию'
            {...lastnameInp}/>
          </label>
        </div>

        {errors.lastname && <p style={{color: 'red'}}>{errors.lastname.message}</p>}

        <div>
          <label>
            Логин:
            <input 
            placeholder='Введите логин'
            {...loginInp}/>
          </label>
        </div>

        {errors.login && <p style={{color: 'red'}}>{errors.login.message}</p>}


        <div>
            <input type="submit"/>
        </div>

      </form>
    </div>
  );
}

export default App;




// Настройте валидацию фамилии по следующим правилам:
// 1) Поле должно быть заполнено
// 2) Длина текста должно быть минимум 3 символа
// Примечание: ошибку валидации необходимо указать под input'ом