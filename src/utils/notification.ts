import { notifications } from "../store/runtime";

let latestNumber: number =  1;
const autoDismiss: number = 10 * 1000; // 10 seconds

export const notify = (text: string, type: number) => {
    notifications.update(o => o = [...o, {id: latestNumber, text: text, type: type}]);
    let toDelete = latestNumber;
    setTimeout(() => notifications.update((n) => n.filter(n => n.id != toDelete)), autoDismiss);
    latestNumber++;
}