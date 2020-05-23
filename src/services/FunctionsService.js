import axios from 'axios'

const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/apprkzqqURjC83Pw3/Table%203"
});

const Axios2 = axios.create({
  baseURL: "https://api.airtable.com/v0/apprkzqqURjC83Pw3/Table%204"
});

Axios.defaults.headers.common = {'Authorization': `Bearer ` + process.env.VUE_APP_AIRTABLEKEY}
Axios2.defaults.headers.common = {'Authorization': `Bearer ` + process.env.VUE_APP_AIRTABLEKEY}

export default{
  options: {
    headers: {'Content-type':'application/json'}
  },
  data: {
    "records": [
      {
        "fields": {
          "Name": "name",
          "function": "email",
        }
      }
    ]
  },
  postFunction() {
    return Axios.post(this.baseURL, this.data)
   
  },
  getCategories() {
    return Axios2.get()
  },
  getFunctions() {
    return Axios.get("?view=gpByCat")
  },
  getFunctionByCategory(cat) {
    return Axios.get("?filterByFormula={Category}='" + cat + "'")
  }
}
