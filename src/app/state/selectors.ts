import { createSelector } from '@ngrx/store';
import { AppState } from '../interface/app.interface';

const stateProductList = (state: AppState) => state;

export const selectProductList = createSelector(
  stateProductList,
  (state) => sortProducts(state)
);

const sortProducts = (state) => {
  if (state.state.productsList.length > 1) {
    const x = state.state.productsList.slice().sort(function (a, b) {
     let dateFormata = convertDate(a.deliveryDate)
      let dateFormatb = convertDate(b.deliveryDate)

      let aa =  dateFormata.split('/').reverse().join()
      let bb =  dateFormatb.split('/').reverse().join()
      return aa < bb ? -1 : (aa > bb ? 1 : 0);
    });
    return x
  }

  return state
}

const convertDate=(inputFormat)=> {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat)
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
}