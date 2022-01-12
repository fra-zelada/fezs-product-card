# feze-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### fezs

## Ejemplo
```
import {ProductCard, ProductImage, ProductTitle, ProductButtons } from 'fezs-product-card'
```


```
<ProductCard 
    key={product.id}
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10
    }}
> 
{
    (  {reset, isMaxCountReached, count, increaseBy, maxCount}  ) => (
        <>
            <ProductImage />
            <ProductTitle   />
            <ProductButtons  />
        </>

        
    )

}
    
</ProductCard>
```