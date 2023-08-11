import { Component, OnDestroy, OnInit, ViewChild,} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  @ViewChild('f') slForm: NgForm;
subscription: Subscription;
editMode=false;
editedItemIndex: number;
editedItem: Ingredient;

  constructor(private slService: ShoppingListService) {

  }
  ngOnInit() {
  this.subscription =  this.slService.stratedEditing
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        // this.editedItem = this.slService.getInngredient(index);
      }
    );
  }
  onAddItem(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount); 
    this.slService.addIngredient(newIngredient);
    form.reset();
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
    
  }
 ngOnDestroy() {
  this.subscription.unsubscribe();
   
 }
 
}
