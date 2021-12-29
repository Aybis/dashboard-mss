import axios from '../axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  dataSummary: (data) => axios.get('crm/inisiasi/summary', data),
  detailByStatus: (data) => axios.get('crm/inisiasi/by-status', data),
  dataByUnit: (data) => axios.get('crm/inisiasi/summary-by-unit', data),
};
