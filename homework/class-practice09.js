const { Actions } = require("./../utils/Actions.js");


function test1() {
  Actions.visitUrl('https://')
  .then(() => Actions.login('TechGlobal', 'Test123'))
  .then(() => Actions.validateTitle('aaa'))
  .catch(err => console.log(err));
}
test1()

async  function test2 () {
  try {
    await Actions.visitUrl('https://')
    await Actions.login('TechGlobal','Test1234')
    await Actions.validateTitle('aaa')
  } catch(err) {
    console.log(err)
  }
}
test2()

