import Splash from './pages/Splash.svelte';
import UserSelection from './pages/UserSelection.svelte';
import PasswordPrompt from './pages/PasswordPrompt.svelte';
import UserPrompt from './pages/UserPrompt.svelte';

const routes = [
    {
        name: '/',
        component: Splash,
    },
    {
        name: 'select-user',
        component: UserSelection,
    },
    {
        name: 'login',
        component: PasswordPrompt,
    },
    {
        name: 'user',
        component: UserPrompt,
    }
]

export { routes };