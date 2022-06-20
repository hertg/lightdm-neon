import Splash from './pages/Splash.svelte';
import UserSelection from './pages/UserSelection.svelte';
import PasswordPrompt from './pages/PasswordPrompt.svelte';
import UserPrompt from './pages/UserPrompt.svelte';
import WmSelect from './pages/WMSelect.svelte';
import PowerMenu from './pages/PowerMenu.svelte';

export default {
    '/': Splash,
    '/select-user': UserSelection,
    '/login': PasswordPrompt,
    '/user': UserPrompt,
    '/session': WmSelect,
    '/power-menu': PowerMenu,
};