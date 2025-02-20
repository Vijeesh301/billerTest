import axios from "axios"

const BASE_URL = "https://risapi.mrbiller.com.au/api/"

export const login = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/Authentication/Login`, {
            email: data.email,
            password: data.password
        },
            {
                headers: {
                    "RIS-API-KEY": "Vm94ZWwgcmFkaW9sb2d5"
                }
            });
        return response;
    } catch (err) {
        return err;
    }
}

export const getUserSettings = async (id) => {
    try {
        const response = await axios.post(`${BASE_URL}/Settings/GetUserSettingsByUserId/${id}`, {
            UserId: id
        },
            {
                headers: {
                    "RIS-API-KEY": "Vm94ZWwgcmFkaW9sb2d5"
                }
            }
        )
        return response;
    } catch (err) {
        return err
    }
}

export const createStorage = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/Settings/Storage`, {
            data
        }, {
            headers: {
                "RIS-API-KEY": "Vm94ZWwgcmFkaW9sb2d5"
            }
        })
        return response;
    } catch (err) {
        return err;
    }
}