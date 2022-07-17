import showMessage from "@/utils/showMessage";
import axios from "axios";

const ins = axios.create();
ins.interceptors.response.use(function(resp) {
    if (resp.data.code !== 0) {
        showMessage({
            content: resp.data.msg,
            type: "error",
            duration: 2000,
        });
        return null;
    }
    return resp.data.data;
});

export default ins;