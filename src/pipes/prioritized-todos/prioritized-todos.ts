import { TodoModel } from "./../../shared/todo.model";
import { Pipe, PipeTransform } from "@angular/core";

/**
 * Generated class for the PrioritizedTodosPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: "prioritizedTodosPipe",
  pure: true
})
export class PrioritizedTodosPipe implements PipeTransform {
  transform(todos: TodoModel[]) {
    const items = todos
      .filter(x => !x.isDone)
      .sort((a, b) => (b.isImportant && !a.isImportant ? 1 : -1));
    console.log("[Pipe] => ", items);
    return items;
  }
}
