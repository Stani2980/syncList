import facade from "../components/auth/loginFacade";

function handleHttpErrors(res) {
    if (!res.ok) {
        throw { message: res.statusText, status: res.status };
    }
    return res.json();
}

async function makeFetchOptions(type, b) {

    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    if (await facade.loggedIn()) {
        headers["x-access-token"] = await facade.getToken();
    }
    return {
        method: type,
        headers,
        body: JSON.stringify(b)
    }
}

export {handleHttpErrors, makeFetchOptions};