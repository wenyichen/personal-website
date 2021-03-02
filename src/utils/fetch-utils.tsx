export const wrapPromise = (promise: gapi.client.HttpRequest<any>) => {
    let status = "pending";
    let result: any;
    let suspender = promise.then(
        r => {
            status = "success";
            result = r;
        },
        e => {
            status = "error";
            result = e;
        }
    );
    return {
        read() {
            if (status === "pending") {
                throw suspender;
            } else if (status === "error") {
                console.log(result);
            } else if (status === "success") {
                return result;
            }
        }
    };
}