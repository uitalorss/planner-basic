const tasks = [{descricao: "Daily", dia: "segunda"}, {descricao: "Entrega de projeto", dia: "terca"}, {descricao: "Natação", dia: "quinta"}]

const taskMonday = tasks.filter((task) => task.dia === "segunda")
;
console.log(taskMonday);


