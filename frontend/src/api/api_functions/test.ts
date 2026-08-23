import { ApiPaths_Test } from "../apiPaths";
import { axiosPost } from "../apiService";

export async function testCreateUser(payload: any){ return axiosPost(ApiPaths_Test.test,payload, undefined )};