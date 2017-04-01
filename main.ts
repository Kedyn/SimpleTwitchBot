import {SimpleTwitchBot} from "./core/SimpleTwitchBot";
import {RootModule} from "./modules/RootModule";

//Get your OAuth key from: https://twitchapps.com/tmi/
//SimpleTwitchBot(Bot name, OAuth key, channel list, reconnect, debug);
let my_bot = new SimpleTwitchBot("SimpleTwitchBot","oauth:???",["SimpleTwitchBot", "MyChannel"],true,true);


//Add the Root Module
my_bot.addModule(new RootModule(my_bot, "Me"));

my_bot.connect();