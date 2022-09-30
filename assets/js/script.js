/** Ações necessárias <header>
 * Vou precisar fazer uma função para pegar todos os compromissos e salvar no localstorage e atribuir ao botão Salvar localStorage
 * Vou precisar fazer uma função para apagar os dados do localstorage e atribuir ao botão Excluir localStorage.
 * Vou precisar pegar os dados de data e hora do computador e linkar ao exemplo de data e hora que está no header.
 */

/** Ações necessárias <formulário>
 * Pegar cada item do formulário (atividade, dia da semana, horario (hora:minuto)) (FEITO)
 * Criar um array de objetos para receber esses dados. (FEITO)
 * Criar função para adicionar uma atividade ao array 
 *    Ao clicar no botão Adicionar atividade, o sistema deve disparar essa função e adicionar no array os dados que estiverem nos inputs (FEITO)
 *    Tratar campos que estiverem vazios. (FEITO)
 *    Disparar uma mensagem de confirmação ao adicionar uma atividade (FEITO)
 * Criar função para excluir todas as atividades
 *  Ao clicar no botão Excluir todos, o sistema deve disparar essa função e excluir todas as tarefas.
 *  Disparar mensagem de confirmação.
 */

/** Ações necessárias (planner)
 * Ao clicar em um dia da semana, o sistema deve mostrar as atividades que tem aquele determinado dia atribuído.
 * A visualização das horas e da atividade tem que estar em cards distintos, conforme wireframe. 
 * Cada card deverá ter um botão para apagar atividade e atualizar o array das atividades.
 * Caso haja duas ou mais atividades com o mesmo dia e horário, deve haver uma personalização diferenciada, conforme wireframe.
*/

 //formulários
  let appointment = document.querySelector(".atividade");
  let selectDays = document.querySelector(".days");
  let hour = document.querySelector(".hour");
  let minute = document.querySelector(".minute");
  let addApointment = document.querySelector(".add-task");
  const plannerDays = document.querySelectorAll('[data-day]');
  let view = document.querySelector(".appointments")

  let list = []


  plannerDays.forEach(plannerDay => plannerDay.addEventListener("click", ()=> {
    const day = plannerDay.dataset.day;
    showDayTasks(day);
    //console.log(`cliquei em ${day}`);
  }))

  const showDayTasks = (dayOfWeek) => {
    let dailyTasks = list.filter((task) => task.day === dayOfWeek);
    let content = document.createElement("div");
    clearContent();
    console.log(dailyTasks)
    dailyTasks.forEach((item) => {
      let appointmentsItem = document.createElement("div");
      let cardTime = document.createElement("div");
      let appointmentCard = document.createElement("div");
      let deleteItem = document.createElement("button");

      appointmentsItem.classList.add("appointments__item");
      cardTime.classList.add("card-time");
      appointmentCard.classList.add("card-appointment")
      deleteItem.classList.add("btn","btn-danger","btn-apagar");
      
      
      cardTime.innerHTML = `${item.hour}h${item.minute}m`;
      appointmentCard.innerHTML = `${item.description}`;
      deleteItem.innerHTML = "Apagar";
      
      appointmentsItem.appendChild(cardTime);
      appointmentsItem.appendChild(appointmentCard);
      appointmentCard.appendChild(deleteItem);
      view.appendChild(appointmentsItem);
      /*content.innerHTML = `
        <div class="appointments__item">
        <div class="card-time">
          
        </div>
        <div class="card-appointment">
          <p class="card-appointment__text"></p>
          <button class="btn btn-danger btn-apagar">Apagar</button>
        </div>
      `*/
    })
    
  }


  addApointment.addEventListener("click", () => {
    addTask();
  })

  function addTask(){
    if(appointment.value === '' || hour.value === ''){
      alert("Você deixou espaços em branco.")
    }else{
      list.push({
        description: appointment.value,
        day: selectDays.value,
        hour: hour.value,
        minute: minute.value
      })
      alert("Inserido!!");
      //clearFields();
    }
  }

  function clearContent(){
    view.innerText = '';
  }
  /*
  function clearFields(){
    appointment.value = '';
    day.value = 'segunda';
    hour.value = '';
    minute.value = '00';
  }*/