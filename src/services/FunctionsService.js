import axios from 'axios'

/**
 * Set our bases URL
 */
const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/"+ process.env.VUE_APP_TABLEKEY +"/Table%203"
});

const Axios2 = axios.create({
  baseURL: "https://api.airtable.com/v0/"+ process.env.VUE_APP_TABLEKEY +"/Table%204"
});

/**
 * Set our headers
 */
Axios.defaults.headers.common = { 'Authorization': `Bearer ` + process.env.VUE_APP_AIRTABLEKEY }
Axios2.defaults.headers.common = { 'Authorization': `Bearer ` + process.env.VUE_APP_AIRTABLEKEY }

export default {
  /**
   * Get our functions & categories from Airtable
   */
  getCategories() {
    return Axios2.get()
  },
  getFunctions() {
    return Axios.get("?view=gpByCat")
  },
  getFunctionByCategory(cat) {
    return Axios.get("?filterByFormula={Category}='" + cat + "'")
  },
}


