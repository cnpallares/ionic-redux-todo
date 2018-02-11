import { TodoModel } from "./../../shared/todo.model";
import { Pipe, PipeTransform } from "@angular/core";

/**
 * Generated class for the DoneTodosPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: "doneTodosPipe",
  pure: true
})
export class DoneTodosPipe implements PipeTransform {
  transform(todos: TodoModel[]) {
    const output = todos.filter(todo => todo.isDone);
    console.log("Pipe output => ", output);
    return output;
  }
}
