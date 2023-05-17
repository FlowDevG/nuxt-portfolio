// import { useUserStore } from "~/store/user";

export const useHttp = async () => {
    const config = useRuntimeConfig();
    // const userStore = useUserStore();

    // const AUTHORIZE = userStore.access_token
    //     ? `${userStore.access_token}`
    //     : null;

    const AUTHORIZE = null;

    const baseURL = "https://api.openweathermap.org";
    const HEADERS = {
        "Content-Type": "application/json",
         "Accept": "application/json",
    };

    if (AUTHORIZE != null) {
        HEADERS["Authorization"] = `Bearer ${AUTHORIZE}`;
    }

    const pending = ref(false);
    const error = ref(null);

    const fetch = async (payload) => {
        let val = 1
        try {
            const data = await $fetch(`${payload.url}`, {
                method: payload.method || "GET",
                baseURL,
                params: payload.params || null,
                headers: HEADERS,
                body: payload.payload || null,
                async onRequest({ request, options }) {
                    pending.value = true;
                },
                async onResponse({ request, response, options }) {
                    pending.value = false;
                },
                async onRequestError({ request, options, reqError }) {
                    pending.value = false;
                    error.value = reqError;
                },
                async onResponseError({ request, response, options }) {
                    pending.value = false;
                },
            });
            return { response: data, error: null };
        } catch (err) {
            let error = err.response._data?.message;
            const errors = err.response._data?.errors;
            
            if (errors) {
                const firstKey = Object.keys(errors);
                error = errors[firstKey][0];
            }   

            return { response: null, error: `${error}` };
        }
    };

    return { fetch, pending, error };
};
