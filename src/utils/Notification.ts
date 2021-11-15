import { notifications } from "../store/LightDMStore"

export const notify = (text: string, type: string) => {
    notifications.update(o => o = [...o, {text: text, type: type}]);
}