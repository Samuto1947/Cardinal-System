const { readdirSync } = require('fs')


module.exports = class ReadyEvent {
    constructor(client) {
        this.client = client
    }

    run() {
        console.log(`Foram carregados um total de ${this.client.commands.size} comandos.`)
        console.log('---------------------------------------')
        console.log(`Eu sou [${this.client.user.tag}] e fui iniciada!`)
        console.log(`Com o ID: ${this.client.user.id}`)
        console.log('---------------------------------------') 
        console.log('log', `O Bot foi iniciado completamente com ${this.client.users.cache.size} usuarios em ${this.client.guilds.cache.size} servidores`)
        
        let status = [
            { name: `Street Fighter 2 Turbo! πβοΈ`, type: "PLAYING" },
            { name: `Utilize ${process.env.PREFIX}ajuda para ver os comandos! πβοΈ`, type: "PLAYING"},
            { name: `${this.client.users.cache.size} usuΓ‘rios me utilizando. πβοΈ`, type: "WATCHING" },
            { name: `Estou em ${this.client.guilds.cache.size} servidores! πβοΈ`, type: "WATCHING" },
            { name: `Grand Theft Auto V π`, type: "PLAYING" }
           
		]

		setInterval(() => {
			let randomStatus = status[Math.floor(Math.random() * status.length)]
			this.client.user.setPresence({ activity: randomStatus })
        }, 30000)
        
        setInterval(() => {
            // Canal de Ping
            let channel = this.client.guilds.cache.get("423191510381625354").channels.cache.get("775104286468079666")
            let statusping = `π πΏπππ: ${Math.round(this.client.ws.ping)}ms`
            if(channel.name != statusping) {
                channel.setName(statusping)
            }

            //Canal de Servidores
            let channel2 = this.client.guilds.cache.get("423191510381625354").channels.cache.get("775104259976462396")
            let statussv = `π Sπππππππππ: ${this.client.guilds.cache.size}`
            if(channel2.name != statussv) {
                channel2.setName(statussv)
            }

            //Comandos Ativos
            let channel3 = this.client.guilds.cache.get("423191510381625354").channels.cache.get("777678098673696798")
            let cmdsize = `π π²πππ-π°πππππ: ${this.client.commands.size}`
            if (channel3.name !== cmdsize) {
                channel3.setName(cmdsize)
            }
        }, 3600000)
    
    
	}
    
}
