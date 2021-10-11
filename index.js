var mineflayer = require('mineflayer');
var pvp = require('mineflayer-pvp').plugin
var { pathfinder, Movements, goals} = require('mineflayer-pathfinder')
var armorManager = require('mineflayer-armor-manager')

var bot = mineflayer.createBot({
    host: '',
    port: 25565,
    username: '',
    password: ''
});

bot.loadPlugin(pvp)
bot.loadPlugin(armorManager)
bot.loadPlugin(pathfinder)

bot.on('spawn', () => {
    bot.chat('>Я хохол и еблан простите блин, мои комманды #help');
});

bot.on('chat', (message) => {
    if(message == 'rockeZZergon') {
        bot.chat(">рокез ты еблан");
    }
});

bot.on('chat', (username, message) => {
    var lowercase = message.toLowerCase();
    if (message.startsWith('#text')) {
        if (username === bot.username) return;
        var text = message.split(' ').slice(1).join(' ');
        bot.chat(text);
    }
    if(message.toLowerCase().includes('rockez') ||
    message.toLowerCase().includes('zergon') ||
    message.toLowerCase().includes('рокез') ||
    message.toLowerCase().includes('зергон') ||
    message.toLowerCase().includes('offeex')) {
        if(username === bot.username) return;
        bot.chat('>рокез хуйло')
    }
    if(message.toLowerCase().includes('fit') ||
    message.toLowerCase().includes('фит')) {
        if(username === bot.username) return;
        bot.chat('>фит пидорас')
    }
    if(message == '#help') {
        if(username === bot.username) return; 
        bot.chat('>https://pastebin.com/mD4M264m')
    }
    if (message == '#look') {
        if (username === bot.username) return;
        bot.chat('>sosesh');
        bot.look(bot.entity.yaw + 5, bot.entity.pitch);
    }
    if (message == '#hit') {
        if (username === bot.username) return;
        bot.attack(entity)
    }
    if(message == '#forward') {
        if(username === bot.username) return;
        bot.setControlState('forward', true)
    }
    if(message == '#back') {
        if(username === bot.username) return;
        bot.setControlState('back', true)
    }
    if(message == '#left') {
        if(username === bot.username) return;
        bot.setControlState('left', true)
    }
    if(message == '#right') {
        if(username === bot.username) return;
        bot.setControlState('right', true)
    }
    if(message == '#jump') {
        if(username === bot.username) return;
        bot.setControlState('jump', true)
    }
    if(message == '#run') {
        if(username === bot.username) return;
        bot.setControlState('jump', true)
        bot.setControlState('forward', true)
    }
    if(message == '#stop') {
        if(username === bot.username) return;
        bot.setControlState('forward', false)
        bot.setControlState('back', false)
        bot.setControlState('left', false)
        bot.setControlState('right', false)
        bot.setControlState('jump', false)
        bot.pathfinder.setMovements(null);
        bot.pathfinder.setGoal(null);
        bot.clearControlStates();
        bot.lookAt
        bot.pvp.stop()
    }
    if (lowercase.startsWith('#пиздинг')) {
        var text = message.split(' ').slice(1).join(' ');
        var player = bot.players[text]
        if (!player) {
            bot.chat("ну и кого мне пиздить")
            return
        }
        bot.pvp.attack(player.entity)
    }
    if(lowercase.startsWith('#алмазы')) {
        var GoalBlock = goals.GoalBlock
        const mcData = require('minecraft-data')(bot.version)
        const movements = new Movements(bot, mcData)
        movements.scafoldingBlocks = []
        bot.pathfinder.setMovements(movements)
    
        const diamodeOre = bot.findBlock({
            matching: mcData.blocksByName.diamond_ore.id,
            maxDistance: 64
        })
    
        if (!diamodeOre) {
            bot.chat("Нет алмазов")
            return
        }
    
        const x = diamodeOre.position.x
        const y = diamodeOre.position.y + 1
        const z = diamodeOre.position.z
        bot.chat(`x:${x} y:${y} z:${z}`)
        const goal = new GoalBlock(x, y, z)
        bot.pathfinder.setGoal(goal)
    }
if(lowercase.startsWith('#пиздуй')) {
    var GoalFollow = goals.GoalFollow
    var text = message.split(' ').slice(1).join(' ');
    var player = bot.players[text]
    if (!player || !player.entity) {
        bot.chat("Где кого за кем нахуй")
        return
    }
    const mcData = require('minecraft-data')(bot.version)
    const movements = new Movements(bot, mcData)
    movements.scafoldingBlocks = []
    bot.pathfinder.setMovements(movements)
    const goal = new GoalFollow(player.entity, 1)
    bot.pathfinder.setGoal(goal, true)
}

});
   