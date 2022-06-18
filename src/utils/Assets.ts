
export const asset = (path: string) => {
    if (path.startsWith("/")) path = path.substring(1);
    if (window.is_mocked) {
        return path;
    } else {
        return "/usr/share/web-greeter/themes/svelte/" + path;
    }
}