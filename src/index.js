import './styles/styles.css';
import { initializeSidebar } from './services/sidebar.js';
import { initializeNav } from './services/nav.js';
import { initializeGameState } from './services/game-state.js'; 

initializeNav();
initializeSidebar();
initializeGameState();