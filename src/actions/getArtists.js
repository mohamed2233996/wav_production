import axios from "axios";
import { API_ENDPOINT } from "../App";


export async function getArtists() {

    axios.get(`${API_ENDPOINT}/artists`)
        .then(res => { return res.json() })
        .catch(err => console.error(err));

}