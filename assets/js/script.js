/** Ações necessárias <header>
 * Vou precisar fazer uma função para pegar todos os compromissos e salvar no localstorage e atribuir ao botão Salvar localStorage (FEITO)
 * Vou precisar fazer uma função para apagar os dados do localstorage e atribuir ao botão Excluir localStorage. (FEITO)
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
 * Ao clicar em um dia da semana, o sistema deve mostrar as atividades que tem aquele determinado dia atribuído. (FEITO)
 * A visualização das horas e da atividade tem que estar em cards distintos, conforme wireframe. (FEITO)
 * Cada card deverá ter um botão para apagar atividade e atualizar o array das atividades. (FEITO)
 * Caso haja duas ou mais atividades com o mesmo dia e horário, deve haver uma personalização diferenciada, conforme wireframe.
*/

(() => {
  window.addEventListener("load", viewLocalStorage)


  const randomId = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
  //formulários
  let appointment = document.querySelector(`[data-form="appointment"]`);
  let selectDays = document.querySelector(`[data-form="select-day"]`);
  let hour = document.querySelector(`[data-form="select-hour"]`);
  let minute = document.querySelector(`[data-form="select-minute"]`);
  const plannerDays = document.querySelectorAll('[data-day]');
  let view = document.querySelector(".appointments")

  let addApointment = document.querySelector(`[data-button="add-task"]`);
  let saveInLocalStorage = document.querySelector(`[data-button="add-localStorage"]`)
  let resetData = document.querySelector(`[data-button="remove-localStorage"]`)
  let list = []


  plannerDays.forEach(plannerDay => plannerDay.addEventListener("click", ()=> {
    const day = plannerDay.dataset.day;
    showDayTasks(day);
  }))

  const showDayTasks = (dayOfWeek) => {
    let dailyTasks = list.filter((task) => task.day === dayOfWeek);
    clearContentPlanner();
    showContent(dailyTasks);
  }

  addApointment.addEventListener("click", () => {
    addTask();
  })
  
  
  function addTask(){
    if(appointment.value === '' || hour.value === ''){
      alert("Você deixou espaços em branco.")
    }else{
      list.push({
        id: randomId(),
        description: appointment.value,
        day: selectDays.value,
        hour: hour.value,
        minute: minute.value
      })
      alert("Inserido!!");
      clearFields();
    }
  }
  
  function clearFields(){
    appointment.value = '';
    selectDays.value = 'segunda';
    hour.value = '';
    minute.value = '00';
  }

  function clearContentPlanner(){
    view.innerText = '';
  }
  
  function showContent(taskList){
    taskList.forEach((item) => {
      let appointmentsItem = document.createElement("div");
      let cardTime = document.createElement("div");
      let appointmentCard = document.createElement("div");
      let contentAppointment = document.createElement("p");
      let deleteItem = document.createElement("button");

      appointmentsItem.classList.add("appointments__item");
      cardTime.classList.add("appointments__item--time");
      contentAppointment.classList.add("appointments__item--description-content")
      appointmentCard.classList.add("appointments__item--description");
      deleteItem.classList.add("btn","btn-danger","appointments__item--description-button");
      deleteItem.setAttribute('data-button', 'delete-item');

      contentAppointment.innerHTML = `${item.description}`
      cardTime.innerHTML = `${item.hour}h${item.minute}m`;
      deleteItem.innerHTML = "Apagar";
      
      appointmentsItem.appendChild(cardTime);
      appointmentsItem.appendChild(appointmentCard);
      appointmentCard.appendChild(contentAppointment);
      appointmentCard.appendChild(deleteItem);
      view.appendChild(appointmentsItem);

      deleteItem.addEventListener("click", () => {
        let updateTask = list.filter((task) =>{
          return item.id != task.id;
        })
        list = updateTask;
        showDayTasks(item.day);
      })
    })
  }

  saveInLocalStorage.addEventListener("click", saveLocalStorage);
  resetData.addEventListener("click", resetLocalStorage);

  function saveLocalStorage(){
    localStorage.setItem('tasks', JSON.stringify(list));
    alert("Seus itens estão salvos no localStorage!")
  }

  function viewLocalStorage(){
    if(localStorage.getItem('tasks')){
      list = JSON.parse(localStorage.getItem('tasks'));
    }else{
      list = [];
    }
  }

  function resetLocalStorage(){
    localStorage.clear();
    list = [];
    clearContentPlanner();
    alert("Seus dados foram resetados.");
  }
})()