import api from "core/Api";
import { BaseError } from "core/Api/Errors";
import queryClient from "core/QueryClient";

const fintechCore = {
  queryClient,
  api,
};

export { BaseError };

export default fintechCore;
