// import { useUserStore } from "~/store/user";

export const useHttpConfig = async(paramsRef) => {
    /**
     * 
     * NOT USED ATM
     */
    const config = useRuntimeConfig();
    // const userStore = useUserStore();
    
    // const AUTHORIZE = userStore.access_token ? `${userStore.access_token}` : null ;
    const AUTHORIZE = null ;

    const baseURL = "https://api.openweathermap.org";
    const HEADERS = {
        "Content-Type": "application/json",
        "Accept":       "application/json",
    };

    if ( AUTHORIZE != null ) {
        HEADERS["Authorization"] = `Bearer ${AUTHORIZE}`;
    };

    const api_config = ref({   
        method: paramsRef.value.method || "GET",
        baseURL: baseURL,
        headers: HEADERS,
        body: JSON.stringify(paramsRef.value.payload) || null,
    });

    const url = ref(paramsRef.value.url);

    return {
      api_config: api_config, 
      url: url,
    }
  }