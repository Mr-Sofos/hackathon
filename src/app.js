import './styles.css'
import ContextMenu from './menu.js'

const contextMenuObject = new ContextMenu('#menu')




import {BackgroundModule} from "./modules/background.module";


const backgroundModuleObject = new BackgroundModule('bgColor', 'Случайный цвет')
backgroundModuleObject.render()
