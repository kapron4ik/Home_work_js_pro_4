/*
  Composition:

  Задание при помощи композиции создать объекты 4х типов:

  functions:
    - MakeBackendMagic
    - MakeFrontendMagic
    - MakeItLooksBeautiful
    - DistributeTasks
    - DrinkSomeTea
    - WatchYoutube
    - Procrastinate

  BackendDeveloper = MakeBackendMagic + DrinkSomeTea + Procrastinate
  FrontendDeveloper = MakeFrontendMagic + DrinkSomeTea + WatchYoutube
  Designer = MakeItLooksBeautiful + WatchYoutube + Procrastinate
  ProjectManager = DistributeTasks + Procrastinate + DrinkSomeTea

  ProjectManager(name,gender,age) => { name, gender, age, type: 'project'}

*/

const Composition = () => {

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

  const BackendDeveloper = (name,gender,age) => {
    const state ={
      name,
      gender,
      age,
      type: 'backend'
    }
    return Object.assign(
      {},
      state,
      MakeBackendMagic(state),
      DrinkSomeTea(state),
      Procrastinate(state),
    )
  }

  const FrontendDeveloper = (name,gender,age) => {
    const state ={
      name,
      gender,
      age,
      type: 'frontend'
    }
    return Object.assign(
      {},
      state,
      MakeFrontendMagic(state),
      DrinkSomeTea(state),
      WatchYoutube(state),
    )
  }

  const Designer = (name,gender,age) => {
    const state ={
      name,
      gender,
      age,
      type: 'design'
    }
    return Object.assign(
      {},
      state,
      MakeItLooksBeautiful(state),
      WatchYoutube(state),
      Procrastinate(state),
    )
  }

  const ProjectManager = (name,gender,age) => {
    const state ={
      name,
      gender,
      age,
      type: 'project'
    }
    return Object.assign(
      {},
      state,
      DistributeTasks(state),
      Procrastinate(state),
      DrinkSomeTea(state),
    )
  }
  
  const YeseniaSanford = BackendDeveloper ('Yesenia Sanford','female',24);
        YeseniaSanford.makeBackendMagic();
        // YeseniaSanford.makeFrontendMagic();
        // YeseniaSanford.makeItLooksBeautiful();
        // YeseniaSanford.distributeTasks();
        YeseniaSanford.drinkSomeTea();
        // YeseniaSanford.watchYoutube();
        YeseniaSanford.procrastinate();

}

export default Composition;