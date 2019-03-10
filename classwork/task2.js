/*

  Используя методы для создания объектов из задания по композиции написать фабику (HeadHunt), которая будет
  расспределять и создавать сотрудников компании нужного типа.

  Данные для списка сотрудников: http://www.json-generator.com/api/json/get/cfeTmcNIXS?indent=2

  HeadHunt => {
    hire( obj ){
      ...
    }
  }

  Привязать к интерфейсу и вывести на страницу. На кнопку нанять повесить метод hire из фабрики

*/

const Fabric = () => {

  const MakeBackendMagic = state => ({
    makeBackendMagic: () => console.log(`${state.name} make backend magic`)
  });

  const MakeFrontendMagic = state => ({
    makeFrontendMagic: () => console.log(`${state.name} make frontend magic`)
  });

  const MakeItLooksBeautiful = state => ({
    makeItLooksBeautiful: () => console.log(`${state.name} make it looks beautiful`)
  });

  const DistributeTasks = state => ({
    distributeTasks: () => console.log(`${state.name} distributes tasks`)
  });

  const DrinkSomeTea = state => ({
    drinkSomeTea: () => console.log(`${state.name} drink some tea`)
  });

  const WatchYoutube = state => ({
    watchYoutube: () => console.log(`${state.name} wathch Youtube`)
  });

  const Procrastinate = state => ({
    procrastinate: () => console.log(`${state.name} procrastinate`)
  });

  const BackendDeveloper = function ({name,gender,age,type,id}) {
    const state ={
      name,
      gender,
      age,
      type: 'backend',
      id
    }
    return Object.assign(
      {},
      state,
      MakeBackendMagic(state),
      DrinkSomeTea(state),
      Procrastinate(state),
    )
  }

  const FrontendDeveloper = function ({name,gender,age,type,id}) {
    const state ={
      name,
      gender,
      age,
      type: 'frontend',
      id
    }
    return Object.assign(
      {},
      state,
      MakeFrontendMagic(state),
      DrinkSomeTea(state),
      WatchYoutube(state),
    )
  }

  const Designer = function ({name,gender,age,type,id}) {
    const state ={
      name,
      gender,
      age,
      type: 'design',
      id
    }
    return Object.assign(
      {},
      state,
      MakeItLooksBeautiful(state),
      WatchYoutube(state),
      Procrastinate(state),
    )
  }

  const ProjectManager = function ({name,gender,age,type,id}) {
    const state ={
      name,
      gender,
      age,
      type: 'project',
      id
    }
    return Object.assign(
      {},
      state,
      DistributeTasks(state),
      Procrastinate(state),
      DrinkSomeTea(state),
    )
  }

  function HeadHunt () {
    this.hire = function ( obj ){
      let id = event.target.closest('.node').dataset.id;
      console.log('id', id)

      this.closest('.availableStaff').removeChild(this.closest('.node'));
      let node = availableStaff.filter((el)=>el.id === id)[0];
      myTeam.push(node);
      availableStaff.splice(availableStaff.findIndex((item)=> item.id === id), 1);
      renderTeam (node);

      console.log('availableStaff', availableStaff);
      console.log('myTeam', myTeam);
    };

    this.typeFactory = function (state){
      let TypeClass = null;
      switch(state.type){
        case 'backend':
          TypeClass = BackendDeveloper;
          break;
        case 'frontend':
          TypeClass = FrontendDeveloper;
          break;
        case 'design':
          TypeClass = Designer;
          break;
        case 'project':
          TypeClass = ProjectManager;
          break;
        default:
        return false;
      }
      return new TypeClass (state);
    }
  }

  const mySuperForge = new HeadHunt();

  function render (item){
    let available = document.querySelectorAll('.availableStaff')[0];
    let node = document.createElement('div');
    node.className = "node";
    node.setAttribute('data-id', `${item._id}`)
    node.innerHTML = `
        <span>${item.name}(${item.age})</span>
        <span class="type">${item.type}</span>
        <button class="hide" style="cursor: pointer">Нанять</button>
    `;
    available.appendChild( node );
    let btn = node.querySelector('.hide');
    btn.addEventListener('click', mySuperForge.hire );
  }

  function renderTeam (item){
    let available = document.querySelectorAll('.myTeam')[0];
    let node = document.createElement('div');
    node.className = "nodeTeam";
    node.setAttribute('data-id', `${item.id}`)
    node.innerHTML = `
        <span>${item.name}(${item.type})</span>
    `;
    available.appendChild( node );
  }

  let url = 'http://www.json-generator.com/api/json/get/cfeTmcNIXS?indent=2';

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain");

  const ConvertToJSON = (data) => data.json();

  fetch (url, {method: 'POST', header: myHeaders})
    .then(ConvertToJSON)
    .then( data => {
      let x =  data.map(( item ) => {
        availableStaff.push(
          mySuperForge.typeFactory({
            name: item.name,
            gender: item.gender,
            age: item.age,
            type: item.type,
            id: item._id
          })
        );
        render(item);
      });
    })

  const availableStaff=[];
  const myTeam=[];

  const root = document.getElementById('root');
  const available = document.createElement('div');
  const team = document.createElement('div');
  root.appendChild (available);
  root.appendChild (team);
  available.className = "availableStaff";
  team.className = "myTeam";

  







}


export default Fabric;