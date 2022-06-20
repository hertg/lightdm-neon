import { notifications } from "../store/runtime";

export const notify = (text: string, type: number) => {
    notifications.update(o => o = [...o, {text: text, type: type}]);
}