import api from "../services/api";

export const getCharacters = async () => {
    try {
        const response = await api
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
                },
            });

        return response.data.data.characters.results;

    } catch (err) {
        console.error("Error: ", err)
    };
};