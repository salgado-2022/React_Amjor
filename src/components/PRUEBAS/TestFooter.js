import '../PRUEBAS/TestFooter.css'
import { useCart } from '../../hooks/useCart'
import { useFilters } from '../../hooks/useFilters'

export function TestFooter () {
  const { filters } = useFilters()
  const { cart } = useCart()

  return (
    <footer className='testfooter'>
      <h4>Prueba:</h4>
      {
        JSON.stringify(filters, null, 2)
      }
      {
        JSON.stringify(cart, null, 2)
      }
      {
      /*
      <h4>Prueba técnica de React ⚛️ － <span>@midudev</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
      */
      }
    </footer>
  )
}
