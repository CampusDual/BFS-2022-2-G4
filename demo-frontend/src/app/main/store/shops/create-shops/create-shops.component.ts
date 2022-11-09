import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Shop } from 'src/app/model/shop';
import { CategoryService } from 'src/app/services/category.service';
import { ShopService } from 'src/app/services/shop.service';
import { Location } from '@angular/common'
import { User } from 'src/app/model/user';
import { UserServicesService } from 'src/app/services/user-services.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-shops',
  templateUrl: './create-shops.component.html',
  styleUrls: ['./create-shops.component.scss']
})
export class CreateShopsComponent implements OnInit {

  shop: Shop;
  id: number;
  shopName: string;
  category: Category;
  categories: Category[] = [];
  allCategories: Category[];
  user: User;
  users: User[];
  shopForm: FormGroup;
  userSearch: string = '';

  // shopForm: FormGroup = this.fb.group({

  //   shopName: [
  //     'Lanas', [Validators.required]
  //   ],
  //   category: [
  //     '', [Validators.required]
  //   ],

  //   userLogin: ['Tendea101',
  //   [Validators.required, Validators.minLength(2), Validators.maxLength(24)],  ],
  //   userName: [
  //     'Pablo',
  //     [Validators.required, Validators.minLength(2), Validators.maxLength(24)],
  //   ],
  //   userSurname1: [
  //     'Fuentes',
  //     [Validators.required, Validators.minLength(2), Validators.maxLength(24)],
  //   ],
  //   userSurname2: [
  //     '', [],
  //   ],
  //   userEmail: ['tendea101@tendea.com', [Validators.required, Validators.email]],
  //   userPassword: [
  //     'Camiseta16',
  //     {
  //       validators: [
  //         Validators.required,
  //         Validators.minLength(8),
  //         Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,24}$'),
  //       ],
  //       updateOn: 'blur',
  //     },
  //   ],


  // });

  constructor(
    private fb: FormBuilder,
    private shopService: ShopService,
    private categoryService: CategoryService,
    private userService: UserServicesService,
    private router: Router,
    private location: Location
  ) {  
    this.shop = new Shop();
    this.shop.user = new User();
   }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      res => this.allCategories = res
    );

    this.userService.getUsers().subscribe(
      res => this.users = res
    );

    this.createFormGroup();
  }

  onFormChanges() {
    this.shopForm.valueChanges.subscribe((val) => {});
  }


  createFormGroup() {
    this.shopForm = this.fb.group({
      name: [this.shop.name, Validators.required],
      // categories: [this.shop.categories, Validators.required],
      city: [this.shop.city, Validators.required],
      phone: [this.shop.phone, Validators.required],
      email: [this.shop.email, Validators.required],
      user: [this.shop.user, Validators.required],
    });

    // this.shop.user = this.user;

  }

  findUsers() {
    this.userService.getUserByLogin(this.userSearch).subscribe(
      res => (this.users = res)
    );
    console.log(this.users);
  }

  saveCategory(): Category[] {
    console.log(this.category.name);
    return this.categories = [{id: this.category.id, name: this.category.name}];

  }
  

  save() {

    console.log(this.category.name);
    console.log(this.shopForm.value);
    const newShop: Shop = Object.assign({}, this.shopForm.value );

    // let categories = [{id:1, name: "Electronica"}];
    let categories = this.saveCategory();
    let nShop = {categories, ...newShop};
    
    this.shopService.createShop(nShop).subscribe((response) => {
      this.redirectList(response);
    });

    console.log(nShop);
  }

  redirectList(response: any) {
    if (response.responseCode === 'OK') {
      this.router.navigate(['/shops']);
    }else{
      console.log(response);
    }
  }

  back(): void {
    this.location.back();
  }




}
