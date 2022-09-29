/** Ações necessárias <header>
 * Vou precisar fazer uma função para pegar todos os compromissos e salvar no localstorage e atribuir ao botão Salvar localStorage
 * Vou precisar fazer uma função para apagar os dados do localstorage e atribuir ao botão Excluir localStorage.
 * Vou precisar pegar os dados de data e hora do computador e linkar ao exemplo de data e hora que está no header.
 */

/** Ações necessárias <formulário>
 * Pegar cada item do formulário (atividade, dia da semana, horario (hora:minuto))
 * Criar um array de objetos para receber esses dados
 * Criar função para adicionar uma atividade ao array 
 *    Ao clicar no botão Adicionar atividade, o sistema deve disparar essa função e adicionar no array os dados que estiverem nos inputs (FEITO)
 *    Tratar campos que estiverem vazios. (FEITO)
 *    Disparar uma mensagem de confirmação ao adicionar uma atividade (FEITO)
 * Criar função para excluir todas as atividades
 *  Ao clicar no botão Excluir todos, o sistema deve disparar essa função e excluir todas as tarefas. (FEITO)
 *  Disparar mensagem de confirmação.
 */

//formulários
let appointment = document.querySelector(".atividade");
let days = document.querySelector(".days");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");

//botoes
let addApointment = document.querySelector(".add-task");
let removeAppointments = document.querySelector(".remove-tasks");

let list = []

addApointment.addEventListener("click", () => {
  addTask();
})

function addTask(){
  if(appointment.value === '' || hour.value === ''){
    alert("Você deixou espaços em branco.")
  }else{
    list.push({
      description: appointment.value,
      day: days.value,
      hour: hour.value,
      minute: minute.value
    })
    alert("Inserido!!");
    clearFields();
  }
}

function clearFields(){
  appointment.value = '';
  days.value = 'segunda';
  hour.value = '';
  minute.value = '00';
}



/** Ações necessárias (planner)
 * Ao clicar em um dia da semana, o sistema deve mostrar as atividades que tem aquele determinado dia atribuído.
 * A visualização das horas e da atividade tem que estar em cards distintos, conforme wireframe. 
 * Cada card deverá ter um botão para apagar atividade e atualizar o array das atividades.
 * Caso haja duas ou mais atividades com o mesmo dia e horário, deve haver uma personalização diferenciada, conforme wireframe.
*/
