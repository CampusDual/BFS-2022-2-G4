import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { API_CONFIG } from '../shared/api.config';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  /**
   * Obtiene todas las categorias de la base de datos
   * @returns category[]
   */
  getCategories(): Observable<Category[]> {
    const url = API_CONFIG.getCategories;
    //const body: CreateUserRequest = new CreateUserRequest(registerUser);
    const headers = new HttpHeaders({
      'Content-type': 'application/json; charset=utf-8',
    });

    return this.http.get<Category[]>(url, { headers });
  }

  /**
   * Obtiene todas la categoria seleccionada
   * @returns category
   */

  getCategory(category: Number) {
    console.log(category);
  }
}
