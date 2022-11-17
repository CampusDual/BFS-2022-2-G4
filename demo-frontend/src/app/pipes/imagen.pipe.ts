import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'ProductImage',
})
export class ImagenPipe implements PipeTransform {
  transform(product: Product): string {
    if (product.images.length > 0) {
      console.log(product.images[0].url);
      return `http://localhost:9999/products/uploads/img/${product.images[0].url}`;
    } else {
      return './assets/images/ImgNoAvailable.png';
    }
  }
}
