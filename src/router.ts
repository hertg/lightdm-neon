import Splash from './pages/Splash.svelte';
import UserSelection from './pages/UserSelection.svelte';
import PasswordPrompt from './pages/PasswordPrompt.svelte';
import UserPrompt from './pages/UserPrompt.svelte';
import PowerMenu from './pages/PowerMenu.svelte';
import Sessions from './pages/Sessions.svelte';

export default {
    '/': Splash,
    '/select-user': UserSelection,
    '/login': PasswordPrompt,
    '/user': UserPrompt,
    '/session': Sessions,
    '/power-menu': PowerMenu,
};