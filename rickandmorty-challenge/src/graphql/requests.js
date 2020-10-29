import api from "../services/api";

export const getCharacters = () => async () => {
    try {
        await api
            ({
                api,
                method: "post",
                data: {
                    query: `{
                        characters {
                            results {
                                id
                                image
                                status
                                name
                            }
                        }
                    }`
                }

            })
            .then((res) => {
                console.log(res.data.data)
            });
    } catch (err) {
        console.error("Error:", err)
    };
};