import axios from 'axios';
import store from '../store';
import { getApiHost } from './address';
import { getWidgetsSuccess, deleteWidgetSuccess } from '../actions/widget-actions';

/**
 * Get widgets
 */

export function getWidgets() {
  console.log(getApiHost() + '/widgets');
  return axios.get(getApiHost() + '/widgets')
    .then(response => {
      store.dispatch(getWidgetsSuccess(response.data));
      return response;
    });
}

/**
 * Search Widgets
 */

export function searchWidgets(query = '') {
  return axios.get(getApiHost() + '/widgets?q='+ query)
    .then(response => {
      store.dispatch(getWidgetsSuccess(response.data));
      return response;
    });
}

/**
 * Delete a widget
 */

export function deleteWidget(widgetId) {
  return axios.delete(getApiHost() + '/widgets/' + widgetId)
    .then(response => {
      store.dispatch(deleteWidgetSuccess(widgetId));
      return response;
    });
}
