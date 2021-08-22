import './styles.css'
import SoundModule from './modules/sound.module.js'



const soundModuleObject = new SoundModule('sound', 'Случайный звук')

import {BackgroundModule} from "./modules/background.module";


const backgroundModuleObject = new BackgroundModule('bgColor', 'Случайный цвет')
backgroundModuleObject.render()
