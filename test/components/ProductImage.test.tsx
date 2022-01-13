import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('pruebas en ProductImage', () => {

    test('debe de hace match con snapshot', () => {

        const wrapper = renderer.create(
            <ProductImage img='imagen.jpg' />
        )
        
        expect(wrapper.toJSON()).toMatchSnapshot();

       }
      )

      test('debe de mostrar el componente con la imagen deltes producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={product2} >

                {

                    () => (
                        <ProductImage />
                    )

                }

            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
        
    })

    }
)



