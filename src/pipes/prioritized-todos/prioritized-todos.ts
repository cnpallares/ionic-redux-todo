import { TodoModel } from "./../../shared/todo.model";
import { Pipe, PipeTransform } from "@angular/core";

/**
 * Generated class for the PrioritizedTodosPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: "prioritizedTodosPipe"
})
export class PrioritizedTodosPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(todos: TodoModel[]) {
    return todos
      .filter(x => !x.isDone)
      .sort((a, b) => (b.isImportant && !a.isImportant ? 1 : -1));
  }
}
