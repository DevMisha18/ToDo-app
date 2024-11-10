const projects = (function() {
  const arrProjects = [];

  function createProject(name) {
    for (const project in arrProjects) {
      if (project.name === name) return false;
    }
    const project = new Project(name);
    arrProjects.push(project);
  }

  function removeProject(name) {
    for (let i = 0; i < arrProjects.length; i++) {
      if (arrProjects[i].name === name) {
        arrProjects.splice(i, 1);
        return true;
      }
    }
    return false;
  }
})();

class Project {
  constructor(name) {
    let name = name;
    const ToDos = [];
  }

  createToDo() {
    
  }

  removeToDo() {

  }
}

class ToDo {
  constructor(title, time, priority) {
    let title = title;
    let time = time;
    let priority = priority;
  }
}