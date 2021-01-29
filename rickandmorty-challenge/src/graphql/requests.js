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

export const getCharacterById = async (id) => {
    try {
        const response = await api
            ({
                api,
                method: "post",
                data: {
                    query: `{
                        character(id: ${id}) {
                            id
                            image
                            name
                            episode {
                                name
                            }
                        }
                    }`
                },
            });

        return response.data.data.character;
        
    } catch (err) {
        console.error("Error: ", err);
    }
};