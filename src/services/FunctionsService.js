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
Axios.defaults.headers.common = { 'Authorization': `Bearer ` + process.env.VUE_APP_AIRTABLEKEY, 'Content-Type': 'application/json' }
Axios2.defaults.headers.common = { 'Authorization': `Bearer ` + process.env.VUE_APP_AIRTABLEKEY }

export default {
  /**
   * Get our functions & categories from Airtable
   */
  getCategories() {
    return Axios2.get()
  },
  getFunctions() {
    return Axios.get("?view=gpByCat&filterByFormula={validate}=1")
  },
  getFunctionByCategory(cat) {
    return Axios.get("?filterByFormula={Category}='" + cat + "'")
  },

  postFunctions() {
    const data = {
      "records": [
        {
          "fields": {
            "Name": " Vérifiez si tous les éléments du tableau sont égaux à une valeur donnée",
            "function": "```const isEqual = (arr, value) => arr.every(item => item === value);```",
            "validate": false
          }
        }
      ]
    }
    
    let url = "https://api.airtable.com/v0/"+ process.env.VUE_APP_TABLEKEY +"/Table%203"
    let axiosConfig = { headers: { Authorization: "Bearer " + process.env.VUE_APP_AIRTABLEKEY , 'Content-Type': 'application/json' } }
    console.log(url)
    axios
      .post(
        url,
        data,
        axiosConfig
      )
      .then(resp => console.log(resp))
      .catch(error => console.log(error))
}

}
